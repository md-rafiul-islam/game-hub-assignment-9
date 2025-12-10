import React from "react";
import { Link } from "react-router";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleLogin} className="m-10">
      <fieldset className="fieldset mx-auto bg-base-200 border-base-300 rounded-box w-xs border p-6">
        <h1 className="text-2xl font-bold">Please Login</h1>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button type="submit" className="btn btn-neutral mt-4">
          Login
        </button>
        <p>
          new to our website{"   "}
          <Link to="/register" className="text-blue-500 hover:text-blue-700">
            register here
          </Link>
        </p>
      </fieldset>
    </form>
  );
};

export default Login;
