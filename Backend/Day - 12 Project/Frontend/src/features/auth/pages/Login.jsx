import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

import "../style/form.scss";

const Login = () => {
  const { user, loading, handleLogin } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleLogin(username, password);

    navigate("/");
  };

  if (loading) {
    return <h1>Loading......</h1>;
  }

  return (
    <main>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            onInput={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
          />

          <input
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            name="password"
            id="password"
            placeholder="Enter Password"
          />
          <button className="button primary-button">Login</button>
        </form>
        <p>
          Don't have an account <Link to={"/register"}>Create One</Link>.
        </p>
      </div>
    </main>
  );
};

export default Login;
