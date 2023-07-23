import emailjs from "@emailjs/browser";
import { useContext, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const { user } = useContext(AuthContext);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ipjc1nl",
        "template_4z1ffkt",
        form.current,
        "81qxM9MDWIQLk3tSO"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "Success!",
            text: `Successfully send Email! `,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset()
        },
        (error) => {
          Swal.fire({
            title: "Error!",
            text: `Read the error message ${error.text}`,
            icon: "error",
            confirmButtonText: "Try Again",
          });
        }
      );
  };
  return (
    <div>
      <Helmet>
        <title>Job Portal | Contact Us</title>
      </Helmet>
      <h1 className="text-xl md:text-5xl  text-primary-content font-bold mt-12 mb-4">
        Contact Us Through An Email!
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-11/12 mx-auto text-primary-content"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="from_name"
              placeholder="your name"
              className="input input-bordered input-primary w-full focus:border-0  "
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="from_email"
              placeholder="your email"
              defaultValue={user ? user.email : ""}
              className="input input-bordered input-primary w-full focus:border-0  "
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input
            type="text"
            name="from_subject"
            placeholder="write the email subject here"
            className="input input-bordered input-primary w-full focus:border-0  "
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            name="message"
            placeholder="write your valuable message here"
            className="textarea textarea-primary focus:border-0 w-full h-[18vh] "
          />
        </div>
        <input
          type="submit"
          value="Send Email"
          className="btn btn-primary mt-3 focus:border-0"
        />
      </form>
    </div>
  );
};

export default Contact;
