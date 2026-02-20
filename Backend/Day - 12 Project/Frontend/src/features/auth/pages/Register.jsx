import { Link } from "react-router";
const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("User in the register ");
  };

  return (
    <main>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
          />

          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter Password"
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter email address"
          />
          <button className="button primary-button">Register</button>
        </form>
        <p>
          Already have an account <Link to={"/login"}>Login to account</Link>.
        </p>
      </div>
    </main>
  );
};

export default Register;
