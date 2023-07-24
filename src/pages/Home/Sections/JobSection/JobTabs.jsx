import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobPost from "./JobPost";
import ExperienceJob from "./ExperienceJob";
import FresherJob from "./FresherJob";

const JobTabs = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-xl md:text-5xl text-primary-content font-bold text-center">
        Discover All The Jobs And Post Jobs
      </h1>
      <Tabs>
        <TabList>
          <Tab>Job Seeker</Tab>
          <Tab>Post A Job</Tab>
        </TabList>
        {/* Job Seeker nested component */}
        <TabPanel>
            <Tabs>
                <TabList>
                    <Tab>Fresher Jobs</Tab>
                    <Tab>Experienced Jobs</Tab>
                </TabList>
                {/* Fresher Job Component */}
                <TabPanel>
                    <FresherJob></FresherJob>
                </TabPanel>
                  {/* Experience Job Component */}
                <TabPanel>
                    <ExperienceJob></ExperienceJob>
                </TabPanel>
            </Tabs>
        </TabPanel>

          {/* Job Poster Component */}
        <TabPanel>
          <JobPost></JobPost>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobTabs;
