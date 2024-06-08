import useScholarship from "../../../Hooks/useScholarship";


const TopScholarship = () => {
    const [scholarship]=useScholarship()
    console.log(scholarship)
    return (
        <div>
            
        </div>
    );
};

export default TopScholarship;