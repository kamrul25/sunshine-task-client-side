import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const SingIn = () => {
  const { login, loginByGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: `Sing In successfully! `,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: `Sing In unsuccessful. Read the message ${error.message}`,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  const handleGoogle = () => {
    loginByGoogle()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: `Sing In successfully by Google! `,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: `Sing In unsuccessful. Read the message ${error.message}`,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };
  return (
    <div>
      <Helmet>
        <title>Job Portal | Sign In</title>
      </Helmet>

      <h1 className="text-2xl md:text-5xl  text-primary-content font-bold mt-12">
        Welcome Back. Sing In now!
      </h1>

      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto relative">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text  text-primary-content">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              required
              className="input input-bordered input-secondary focus:border-0 text-primary-content"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-primary-content">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              required
              className="input input-bordered input-secondary focus:border-0  text-primary-content"
            />
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Sign In"
              className="btn btn-primary  text-primary-content"
            />
          </div>
        </form>

        <div className="divider mt-5">Or Sing In With</div>
        <div className="form-control card-body ">
          <button className="btn btn-primary" onClick={handleGoogle}>
            <FcGoogle className="text-2xl mr-3" />{" "}
            <span className="text-primary-content ">Google</span>
          </button>
        </div>
        <p className="absolute left-10 top-[62%] text-lg ">
          Have not An Account. Please{" "}
          <Link to="/register" className="underline text-primary-content">
            Create
          </Link>
        </p>

        {showPassword ? (
          <button className="absolute top-[36%] right-12 text-2xl">
            <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
          </button>
        ) : (
          <button className="absolute top-[36%] right-12 text-2xl">
            <FaEye onClick={() => setShowPassword(!showPassword)} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SingIn;
