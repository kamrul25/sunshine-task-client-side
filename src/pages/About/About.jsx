import { Helmet } from "react-helmet-async";
import about from "../../assets/about1.png.webp";

const About = () => {
  return (
    <div className="mt-12">
      <Helmet>
        <title>Job Portal | About</title>
      </Helmet>
      <div className="lg:flex justify-between items-center gap-4">
        <div className="space-y-3 text-primary-content ">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            We are committed to connecting talented individuals with their dream
            careers. Whether you are a seasoned professional looking for a new
            challenge or a recent graduate eager to kickstart your career, our
            platform offers an extensive range of job opportunities to suit your
            skills, interests, and aspirations.
          </h1>
          <h1 className="text-2xl lg:text-3xl font-semibold text-[#007AFF]">Why Choose Us?</h1>
          <p className="text-xl lg:text-2xl">
            1. Our job portal collaborates with an extensive network of
            companies, ranging from multinational corporations to innovative
            startups. This diversity ensures that we have a broad array of job
            vacancies across various industries and job functions.
          </p>
          <p className="text-xl lg:text-2xl">
            2. Our user-friendly platform is designed to make your job search
            seamless and efficient. With intuitive navigation and advanced
            search filters, finding the perfect job has never been easier.
          </p>
        </div>
        <img src={about} alt="" className="ml-5 lg:ml-1 h-[95vh]" />
      </div>
      <div className="space-y-3  text-primary-content mt-4">
        <p className="text-xl lg:text-2xl">
          3. We understand that every individual is unique, and so are their
          career goals. Our smart algorithm analyzes your profile, experience,
          and preferences to provide personalized job recommendations that align
          with your aspirations.
        </p>
        <p className="text-xl lg:text-2xl">
          4. We go beyond job listings by offering a rich repository of career
          resources, articles, and expert advice. Whether it's interview tips,
          resume building, or career development guidance, we are here to
          support you in every step of your journey.
        </p>
      </div>
    </div>
  );
};

export default About;
