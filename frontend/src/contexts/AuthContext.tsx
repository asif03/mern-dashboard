import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import apiInstance from "../uitls/api";

type authInitialValue = {
  loggedIn: boolean;
  checkLoginState: () => void;
  user: [];
};

const AuthContext = createContext<authInitialValue | undefined>(undefined);

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(null);
  const [user, setUser] = useState(null);

  const checkLoginState = useCallback(async () => {
    try {
      const {
        data: { loggedIn: logged_in, user },
      } = await apiInstance.get("auth/logged_in");

      console.log(logged_in);
      console.log(user);

      setLoggedIn(logged_in);
      user && setUser(user);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    checkLoginState();
  }, [checkLoginState]);

  return (
    <AuthContext.Provider value={{ loggedIn, checkLoginState, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
