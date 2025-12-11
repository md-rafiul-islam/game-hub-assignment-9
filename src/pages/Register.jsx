import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../authProvider/AuthProvider";

const Register = () => {
  const { signUp, infoUpdate } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const data = e.target;
    const email = data.email.value;
    const password = data.password.value;
    const name = data.name.value;
    const imgurl = data.photoURL.value;
    signUp(email, password)
      .then(() => {
        infoUpdate(name, imgurl)
          .then(() => {
            navigate("/");
            e.target.reset();
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  0;
  return (
    <form onSubmit={handleRegister} className="m-10">
      <fieldset className="fieldset mx-auto bg-base-200 border-base-300 rounded-box w-xs border p-6">
        <h1 className="text-2xl font-bold">Register here</h1>
        {/* name */}
        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          className="input"
          placeholder="Your Name"
        />

        {/* email */}
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
        />

        {/* photourl */}
        <label className="label">PhotoURL</label>
        <input
          type="text"
          name="photoURL"
          className="input"
          placeholder="URL"
        />

        {/* password */}
        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
        />

        <button type="submit" className="btn btn-neutral mt-4">
          Sign Up
        </button>
        <p>
          already have an account?{"   "}
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            sign in
          </Link>
        </p>
      </fieldset>
    </form>
  );
};

export default Register;
