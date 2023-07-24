import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const TopBD = () => {
  const { data: companies = [] } = useQuery({
    queryKey: ["toBD"],
    queryFn: async () => {
      const res = await axios.get(
        "https://sunshine-task-server-side.vercel.app/topBD"
      );
      return res.data;
    },
  });
  const [data, setData] = useState("");
  const { services } = data;
  return (
    <div className="space-y-8">
      <h1 className="text-xl md:text-5xl text-primary-content font-bold text-center">
        Top Bangladeshi IT Companies
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-1/2 lg:w-10/12 mx-auto">
        {companies.map((company) => (
          <div
            key={company._id}
            className="card bg-primary text-primary-content shadow-xl border border-primary"
          >
            <div className="card-body">
              <h2 className="card-title">Name: {company.name}</h2>
              <div onClick={() => setData(company)}>
                <button
                  className="btn btn-success"
                  onClick={() => window.my_modal_4.showModal()}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Open the modal using ID.showModal() method */}
      <dialog id="my_modal_4" className="modal text-primary-content">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">{data.name}</h3>
          <img src={data.logo} alt="" />
          <p className="py-4">{data.description}</p>
          <p className="py-4">Services</p>
          <p className="py-4">{services}</p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-error text-primary-content"
              onClick={() => setData("")}
            >
              Close
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default TopBD;
