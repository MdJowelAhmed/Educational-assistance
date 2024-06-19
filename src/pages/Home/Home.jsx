// import Navbar from "../../components/shareComponents/Navbar";

import Banner from "./Banner";
import HomeReview from "./HomeReview/HomeReview";
import TopScholarship from "./topScholarship/TopScholarship";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopScholarship></TopScholarship>
          <HomeReview></HomeReview>
        </div>
    );
};

export default Home;