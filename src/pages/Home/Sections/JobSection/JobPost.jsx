import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const JobPost = () => {
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("companyLogo", data.companyLogo[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        // console.log(imageResponse)
        if (imageResponse.success) {
          const imgURL = imageResponse.data.display_url;
          const { title, location, companyName, type } = data;
          const newJob = {
            title,
            location,
            companyLogo: imgURL,
            companyName,
            type,
          };

          axios
            .post("https://sunshine-task-server-side.vercel.app/jobs", newJob)
            .then((data) => {
              if (data.data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Job added successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        } else {
          Swal.fire({
            title: "Error!",
            text: `Image fail to upload!`,
            icon: "error",
            confirmButtonText: "Try Again",
          });
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex items-center gap-4 my-2">
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Position Name</span>
            </label>
            <input
              type="text"
              placeholder="Position Name"
              {...register("title", { required: true })}
              className="input input-bordered input-secondary focus:border-0 text-primary-content"
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Company Logo </span>
            </label>
            <input
              type="file"
              {...register("companyLogo", { required: true })}
              className="file-input file-input-bordered input-secondary focus:border-0 text-primary-content "
            />
          </div>
        </div>
        <div className="md:flex items-center gap-4 my-2">
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Company Name</span>
            </label>
            <input
              type="text"
              placeholder="Company Name"
              {...register("companyName", { required: true })}
              className="input input-bordered input-secondary focus:border-0 text-primary-content "
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Company Location</span>
            </label>
            <input
              type="text"
              placeholder="Company Location"
              {...register("location", { required: true })}
              className="input input-bordered input-secondary focus:border-0 text-primary-content"
            />
          </div>
        </div>
        <div className="md:flex items-center  gap-4 my-2">
          <div className="form-control w-full mb-4">
            <label className="label font-semibold">
              <span className="label-text font-semibold">Job Type</span>
            </label>
            <select
              {...register("type", { required: true })}
              className="input input-bordered input-secondary focus:border-0 text-primary-content w-full"
            >
              <option value="Fresher">Fresher</option>
              <option value="Experienced">Experienced</option>
            </select>
          </div>
          <div className="form-control w-full mt-4">
            <input
              className="btn btn-success "
              type="submit"
              value="Post Job"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobPost;
