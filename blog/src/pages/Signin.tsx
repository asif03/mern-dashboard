import { useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Signin</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={formData.email}
          onChange={handleTextChange}
        />
        <input
          type="password"
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
