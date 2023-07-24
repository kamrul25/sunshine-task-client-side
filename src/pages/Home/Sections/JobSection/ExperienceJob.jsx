import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ExperienceJob = () => {
  const experienced = "Experienced";
  const { data: jobsInfo = [] } = useQuery({
    queryKey: ["jobs", experienced],
    queryFn: async () => {
      const res = await axios.get(
        `https://sunshine-task-server-side.vercel.app/jobs/${experienced}`
      );
      return res.data;
    },
  });
  const { user } = useContext(AuthContext);
  const [fold, setFold] = useState(false);
  const navigate = useNavigate();
  const handleApply = () => {
    if (user) {
      Swal.fire({
        title: "Success!",
        text: `Apply successfully! `,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire("Please Login First!");
      navigate("/singIn");
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-xl md:text-5xl text-primary-content font-bold text-center">
        Discover All <span className="text-[#007AFF]">Experienced Jobs</span>
      </h1>

      {fold && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobsInfo.map((job) => (
              <div
                key={job._id}
                className="card shadow-xl border border-primary"
              >
                <div className="card-body">
                  <div className="flex justify-between items-center gap-2">
                    <h2 className="card-title">{job.title}</h2>
                    <img
                      src={job.companyLogo}
                      className="w-[100px] h-[100px]"
                    />
                  </div>
                  <p>{job.companyName}</p>
                  <p>{job.location}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-success" onClick={handleApply}>
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button onClick={() => setFold(!fold)} className="btn btn-primary">
              See Less
            </button>
          </div>
        </>
      )}
      {fold || (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobsInfo.slice(0, 6).map((job) => (
              <div
                key={job._id}
                className="card shadow-xl border border-primary"
              >
                <div className="card-body">
                  <div className="flex justify-between items-center gap-2">
                    <h2 className="card-title">{job.title}</h2>
                    <img
                      src={job.companyLogo}
                      className="w-[100px] h-[100px]"
                    />
                  </div>
                  <p>{job.companyName}</p>
                  <p>{job.location}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-success" onClick={handleApply}>
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button onClick={() => setFold(!fold)} className="btn btn-primary">
              See All Jobs
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ExperienceJob;
