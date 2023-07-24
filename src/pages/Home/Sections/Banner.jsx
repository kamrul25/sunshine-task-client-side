import hero from "../../../assets/hero-man.png.webp"

const Banner = () => {
    return (
        <div className="lg:flex justify-evenly items-center gap-3">
            <div className="text-center lg:text-justify text-primary-content ">
                <h1 className="text-2xl lg:text-5xl font-bold">Searching for a <br />Job? Find the<br /><span className="text-[#007AFF]">best job</span> that<br /> <span className="text-[#007AFF]">fit for you</span></h1>
            </div>
            <img src={hero} alt="" />
        </div>
    );
};

export default Banner;