import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Settings from "../components/Settings";
import googleIcon from "../assets/google.png";
import { FaApple } from "react-icons/fa6";

const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      // Gets authentication url from backend server
      const {
        data: { url },
      } = await axios.get(`${serverUrl}/auth/url`);
      // Navigate to consent screen
      window.location.assign(url);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div
        className="flex h-screen w-full items-center bg-light-primary dark:bg-dark-primary"
        style={{ zIndex: "-1" }}
      >
        <div className="container mx-auto flex max-w-xl flex-col items-center justify-center gap-3 py-5">
          <Link to="/">
            <Logo />
          </Link>
          <h1 className="text-5xl font-semibold text-light-primary dark:text-dark-primary">
            Sign in
          </h1>
          <p className="text-sm font-semibold text-light-primary dark:text-dark-primary">
            Sign in with Open accounts
          </p>
          <div className="flex flex-col justify-between  gap-3 sm:flex-row">
            <button
              type="button"
              className="flex h-12 w-36 flex-row items-center justify-center gap-1 rounded-full border text-sm font-semibold text-light-primary dark:text-dark-primary"
              onClick={handleGoogleLogin}
            >
              <img src={googleIcon} alt="Google ID" width={16} height={16} />{" "}
              Google
            </button>
            <button
              type="button"
              className="flex h-12 w-36 flex-row items-center justify-center gap-1 rounded-full border text-sm font-semibold text-light-primary dark:text-dark-primary"
            >
              <FaApple />
              Apple ID
            </button>
          </div>
          <hr className="border border-slate-300" />
          <p className="text-sm font-semibold text-light-primary dark:text-dark-primary">
            Or continue with email address
          </p>
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <svg
                className="text-light-primary dark:text-dark-primary"
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.2 1.75H15.8C16.1476 1.75 16.4492 1.9416 16.5991 2.2221L9.99924 6.4998C9.69693 6.69574 9.30309 6.69574 9.00078 6.4998L2.40088 2.22208C2.55081 1.94159 2.85239 1.75 3.2 1.75ZM2.3 4.25994V11.375C2.3 11.8582 2.70294 12.25 3.2 12.25H15.8C16.2971 12.25 16.7 11.8582 16.7 11.375V4.25995L10.9977 7.95588C10.0908 8.54371 8.90925 8.54371 8.00232 7.95588L2.3 4.25994ZM0.5 2.625C0.5 1.17525 1.70883 0 3.2 0H15.8C17.2912 0 18.5 1.17525 18.5 2.625V11.375C18.5 12.8247 17.2912 14 15.8 14H3.2C1.70883 14 0.5 12.8247 0.5 11.375V2.625Z"
                  fill="#6F767E"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="block w-full rounded-lg bg-light-input-bg p-2.5 ps-10 text-sm text-light-primary placeholder:text-xs placeholder:font-semibold dark:bg-dark-input-bg dark:text-dark-primary dark:placeholder-gray-400"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <svg
                className="text-light-primary dark:text-dark-primary"
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 6V5C3 2.23858 5.23858 0 8 0C10.7614 0 13 2.23858 13 5V6C14.6569 6 16 7.34315 16 9V17C16 18.6569 14.6569 20 13 20H3C1.34315 20 0 18.6569 0 17V9C0 7.34315 1.34315 6 3 6ZM5 5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5V6H5V5ZM2 9C2 8.44772 2.44772 8 3 8H13C13.5523 8 14 8.44772 14 9V17C14 17.5523 13.5523 18 13 18H3C2.44772 18 2 17.5523 2 17V9Z"
                  fill="#6F767E"
                />
              </svg>
            </div>
            <input
              type="password"
              id="simple-search"
              className="block w-full rounded-lg bg-light-input-bg p-2.5 ps-10 text-sm text-light-primary placeholder:text-xs placeholder:font-semibold dark:bg-dark-input-bg dark:text-dark-primary dark:placeholder-gray-400"
              placeholder="****"
              required
            />
          </div>
          <button
            type="submit"
            className="flex h-11 w-full flex-row items-center justify-center gap-1 rounded-full bg-primary text-sm font-semibold text-primary"
          >
            Submit
          </button>
          <p className="pt-4 text-sm font-semibold text-secondary">
            This site is protected by reCAPTCHA and the Google Privacy Policy.
          </p>
          <p className="pt-4 text-sm font-semibold text-secondary">
            Don’t have an account?{" "}
            <span className="text-light-primary dark:text-dark-primary">
              <Link to="/signup">Sign in</Link>
            </span>
          </p>
        </div>
      </div>

      <Settings />
    </>
  );
};

export default Login;
