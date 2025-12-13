import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../authProvider/AuthProvider";

const Register = () => {
  const { signUp, infoUpdate } = use(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const data = e.target;
    const email = data.email.value;
    const password = data.password.value;
    const name = data.name.value;
    const imgurl = data.photoURL.value;

    const hasUppercase = /[A-Z]/;
    const hasLowercase = /[a-z]/;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (!hasUppercase.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    if (!hasLowercase.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }

    signUp(email, password)
      .then(() => {
        infoUpdate(name, imgurl)
          .then(() => {
            navigate("/");
            data.reset();
          })
          .catch((error) => setError(error.message));
      })
      .catch((error) => setError(error.message));
  };

  return (
    <form onSubmit={handleRegister} className="m-10">
      <fieldset className="fieldset mx-auto bg-base-200 border-base-300 rounded-box w-xs border p-6">
        <h1 className="text-2xl font-bold">Register here</h1>

        {/* Name */}
        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          className="input"
          placeholder="Your Name"
          required
        />

        {/* Email */}
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
          required
        />

        {/* Photo URL */}
        <label className="label">PhotoURL</label>
        <input
          type="text"
          name="photoURL"
          className="input"
          placeholder="Photo URL"
        />

        {/* Password */}
        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
          required
        />

        {/* Error Message */}
        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button type="submit" className="btn btn-neutral mt-4">
          Sign Up
        </button>

        <p className="mt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Sign in
          </Link>
        </p>
      </fieldset>
    </form>
  );
};

export default Register;
