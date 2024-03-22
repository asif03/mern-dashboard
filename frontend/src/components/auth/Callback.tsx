import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import apiInstance from "../../uitls/api";

const Callback = () => {
  const called = useRef(false);
  const { checkLoginState, loggedIn } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (loggedIn === false) {
        try {
          if (called.current) return; // prevent rerender caused by StrictMode
          called.current = true;
          const res = await apiInstance.get(
            `auth/token${window.location.search}`,
          );
          console.log("response: ", res);
          checkLoginState();
          navigate("/login");
        } catch (err) {
          console.error(err);
          navigate("/login");
        }
      } else if (loggedIn === true) {
        navigate("/dashboard");
      }
    })();
  }, [checkLoginState, loggedIn, navigate]);
  return <></>;
};

export default Callback;
