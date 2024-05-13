import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../app/services/auth";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import { toast } from "react-toastify";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      //onsole.log(userInfo);
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formData).unwrap();
      //console.log(res);
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };
  return (
    <div>
      <h1>Signin</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleTextChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleTextChange}
        />
        <button type="submit">Login</button>
      </form>
      <div>
        Don't have an account <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Signin;
