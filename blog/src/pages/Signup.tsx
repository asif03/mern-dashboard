import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h1>Signup</h1>
      <div>
        Already have account? <Link to="/signin">Sign in</Link>
      </div>
    </div>
  );
};

export default Signup;
