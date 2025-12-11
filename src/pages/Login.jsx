import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../authProvider/AuthProvider";

const Login = () => {
  const { logIn } = use(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const data = e.target;
    const email = data.email.value;
    const password = data.password.value;
    logIn(email, password)
      .then(() => {})
      .catch((error) => console.log(error));
    navigate("/");
  };
  return (
    <form onSubmit={handleLogin} className="m-10">
      <fieldset className="fieldset mx-auto bg-base-200 border-base-300 rounded-box w-xs border p-6">
        <h1 className="text-2xl font-bold">Please Login</h1>

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
        />

        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
        />

        <button type="submit" className="btn btn-neutral mt-4">
          Login
        </button>
        <p>
          New to our website{"   "}
          <Link to="/register" className="text-blue-500 hover:text-blue-700">
            register here
          </Link>
        </p>
      </fieldset>
    </form>
  );
};

export default Login;
