import Banner from "./Sections/Banner";
import Blog from "./Sections/Blog.Jsx";
import MyProfile from "./Sections/MyProfile";
import TopBD from "./Sections/TopITComapnies/TopBD";
import TopWorld from "./Sections/TopITComapnies/TopWorld";


const Home = () => {
    return (
        <div className="space-y-5">
            <Banner></Banner>
            {/* JObs Section */}
            <TopBD></TopBD>
            <TopWorld></TopWorld>
            <MyProfile></MyProfile>
            <Blog></Blog>
        </div>
    );
};

export default Home;