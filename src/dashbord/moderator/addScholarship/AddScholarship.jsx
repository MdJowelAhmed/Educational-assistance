import AddScholarShipForm from "./AddScholarShipForm";


const AddScholarship = () => {
    return (
        <div>
            <h2 className=" text-4xl font-lato px-16 text-center">Create a new scholarship</h2>
            <p className="px-16 text-center">The Global Visionary Leaders Scholarship supports exceptional students in <br /> Agriculture, Engineering, and Medicine. Awarded for academic excellence <br /> and leadership, it provides financial aid</p>
           <AddScholarShipForm></AddScholarShipForm>
        </div>
    );
};

export default AddScholarship;