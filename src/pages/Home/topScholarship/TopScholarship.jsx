import useScholarship from "../../../Hooks/useScholarship";


const TopScholarship = () => {
    const [scholarship]=useScholarship()
    console.log(scholarship)
    return (
        <div>
            topScholarship
        </div>
    );
};

export default TopScholarship;