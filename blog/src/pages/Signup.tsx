import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <h1>Signup</h1>
      <div>
        Already have account? <Link to="/signin">Sign in</Link>
      </div>
    </div>
  );
};

export default Signup;
