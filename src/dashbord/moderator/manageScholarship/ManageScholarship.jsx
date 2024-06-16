import useScholarship from "../../../Hooks/useScholarship";


const ManageScholarship = () => {
    const [scholarship]=useScholarship()
    console.log(scholarship)
    return (
        <div>
           
        </div>
    );
};

export default ManageScholarship;