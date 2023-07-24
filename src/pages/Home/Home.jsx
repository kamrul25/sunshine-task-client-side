import Banner from "./Sections/Banner";
import Blog from "./Sections/Blog.Jsx";
import JobTabs from "./Sections/JobSection/JobTabs";
import MyProfile from "./Sections/MyProfile";
import TopBD from "./Sections/TopITComapnies/TopBD";
import TopWorld from "./Sections/TopITComapnies/TopWorld";


const Home = () => {
    return (
        <div className="space-y-16">
            <Banner></Banner>
            <JobTabs></JobTabs>
            <TopBD></TopBD>
            <TopWorld></TopWorld>
            <MyProfile></MyProfile>
            <Blog></Blog>
        </div>
    );
};

export default Home;