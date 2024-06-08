import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./usePublic";


const useScholarship = () => {
   const axiosPublic=useAxiosPublic()
    const {data: scholarship = [], isPending: loading, refetch} = useQuery({
        queryKey: ['scholarship'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/scholarship');
            return res.data;
        }
    })


    return [scholarship, loading, refetch]
};

export default useScholarship;