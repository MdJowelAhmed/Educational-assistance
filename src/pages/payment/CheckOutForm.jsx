import { useQuery } from "@tanstack/react-query";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosPublic from "../../Hooks/usePublic";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const CheckOutForm = () => {
    const { user } = useAuth()
    const [clientSecret, setClientSecret] = useState('')
    const [error, setError] = useState('');
    const { id } = useParams()
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const [isOpen, setIsOpen] = useState(false)
    
    const { data: scholarship = {}, isLoading,
        refetch, } = useQuery({
            queryKey: ['scholarship', id],
            queryFn: async () => {
                const { data } = await axiosPublic.get(`/detailsScholarship/${id}`)
                return data
            }
        })
    const tuition = parseInt(scholarship.tuitionFee);
    const applied = parseInt(scholarship.applicationFee);
    const service = parseInt(scholarship.serviceCharge);
    const totalFee = parseInt(tuition + applied + service)
    // console.log(totalFee)

    const closeModal = () => {
        setIsOpen(false)
      }
    

    useEffect(() => {
        if (totalFee > 0) {
            axiosSecure.post('/create-payment-intent', { total: totalFee })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure,totalFee])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

// console.log('74')
        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                   
                }
              
            }
        })
        
// console.log('745')
        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);
                console.log(setTransactionId)

                // now save the payment in the database
                const payment = {
                    ...scholarship,
                    email: user.email,
                    fee: totalFee,
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc date convert. use moment js to 
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', payment);
                console.log('payment saved', res.data);
                refetch();
                if (res.data?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Payment successfully ",
                        showConfirmButton: false,
                        timer: 1500
                    });
                //     navigate('/dashboard/paymentHistory')
                }

            }
        }
    }
    return (
        <div>
            <div className="bg-base-200 p-12 w-96 rounded-lg mb-10">
                <p>Tuition fee :   <span className="text-green-700 md:ml-8 font-lato text-xl">${scholarship.tuitionFee}</span> </p>
                <p>Application fee : <span className="text-green-700 font-lato text-xl"> ${scholarship.applicationFee}</span> </p>
                <p>Service Charge : <span className="text-green-700 font-lato text-xl">${scholarship.serviceCharge}</span> </p>

                <div className=" border-dotted border-2 my-3 border-green-600 w-full"></div>

                <h2> Total Fee : <span className="text-green-900 md:ml-8 font-lato text-xl"> ${totalFee}</span></h2>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button className="btn btn-sm btn-primary my-4" type="submit" >
                        Pay
                    </button>
                    <p className="text-red-600">{error}</p>
                    {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
                </form>
            </div>
        </div>
    );
};

export default CheckOutForm;