import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: `Successfully Logout`,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: `Logout Unsuccessfully. ${error.message}`,
          icon: "error",
        });
      });
  };

  const [fold, setFold] = useState(true);
  const navbar = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? "text-yellow-500" : isPending ? "text-white" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isActive ? "text-yellow-500" : isPending ? "text-white" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isActive ? "text-yellow-500" : isPending ? "text-white" : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className=" lg:hidden">
            <button className="text-2xl mt-2" onClick={() => setFold(!fold)}>
              <FaBars></FaBars>
            </button>
          </label>
          {fold && (
            <ul
              tabIndex={0}
              className=" dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-44 text-2xl space-y-2"
            >
              {navbar}
            </ul>
          )}
        </div>
        <Link to="/" className="italic text-2xl ml-3">
          <span className="text-white">Job</span>
          <span className="text-indigo-400">Por</span>
          <span className="text-yellow-500">tal</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center justify-center gap-6 text-2xl">
          {navbar}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link onClick={handleLogOut} className="btn btn-error text-2xl">
            Sing Out
          </Link>
        ) : (
          <Link to="/singIn" className="btn btn-active btn-secondary text-2xl">
            Sing In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
