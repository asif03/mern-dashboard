import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <h1>Signin</h1>
      <div>
        Don't have an account <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Signin;
