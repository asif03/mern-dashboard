import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import googleIcon from "../assets/google.png";
import illustration from "../assets/Illustration.png";
import { FaApple } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import SettingsAuth from "../components/SettingsAuth";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  email: string;
}

const Signup = () => {
  const [btnDisabled, setBtnDisabled] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ mode: "all" });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const handleEmailChange = () => {
    setBtnDisabled(false);
  };

  return (
    <>
      <div
        className="flex h-auto w-full items-center bg-light-primary dark:bg-dark-primary sm:h-screen lg:h-screen"
        style={{ zIndex: "-1" }}
      >
        <div className="container mx-auto hidden h-full w-1/3 flex-col bg-[#F4F4F4] dark:bg-dark-secondary sm:flex lg:flex">
          <div className="h-20 py-5">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="flex h-[calc(100vh-80px)] flex-col items-center justify-center">
            <img src={illustration} alt="illustration" />
            <h4 className="py-2 text-4xl font-semibold text-[#272B30] dark:text-dark-primary">
              Plan includes
            </h4>
            <ul className="flex flex-col gap-2 pt-4 text-sm font-semibold text-[#6F767E]">
              <li className="flex flex-row items-center gap-2">
                <FaRegCheckCircle className="text-[#83BF6E]" />{" "}
                <span>Unlimited product uploads</span>
              </li>
              <li className="flex flex-row items-center gap-2">
                <FaRegCheckCircle className="text-[#83BF6E]" />{" "}
                <span>Pro tips</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-full w-full sm:w-2/3 lg:w-2/3">
          <div className="container mx-auto flex h-full flex-col items-center justify-between">
            <div className="flex h-20 w-full items-center justify-between gap-1 px-5 py-5 md:justify-end lg:justify-end">
              <Link to="/" className="block sm:hidden lg:hidden">
                <Logo />
              </Link>
              <div className="text-xs font-bold">
                <span className="text-[#9A9FA5]">Already a member? </span>
                <Link to="/login" className="dark:text-dark-primary">
                  Sign in
                </Link>
              </div>
            </div>
            <div className="flex h-[calc(100vh-80px)] max-w-xl flex-col items-center justify-center gap-3 py-5 lg:md:h-[calc(100vh-80px)]">
              <h1 className="text-5xl font-semibold text-light-primary dark:text-dark-primary">
                Sign up
              </h1>
              <p className="text-sm font-semibold text-light-primary dark:text-dark-primary">
                Sign up with Open accounts
              </p>
              <div className="flex flex-col justify-between  gap-3 sm:flex-row">
                <button
                  type="button"
                  className="flex h-12 w-36 flex-row items-center justify-center gap-1 rounded-full border text-sm font-semibold text-light-primary dark:text-dark-primary"
                >
                  <img
                    src={googleIcon}
                    alt="Google ID"
                    width={16}
                    height={16}
                  />{" "}
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
              <form
                className="flex w-full flex-col gap-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="relative w-full">
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                    {errors.email ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                        />
                      </svg>
                    ) : (
                      <svg
                        role="alert"
                        className="text-light-primary dark:text-dark-primary"
                        width="19"
                        height="14"
                        viewBox="0 0 19 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.2 1.75H15.8C16.1476 1.75 16.4492 1.9416 16.5991 2.2221L9.99924 6.4998C9.69693 6.69574 9.30309 6.69574 9.00078 6.4998L2.40088 2.22208C2.55081 1.94159 2.85239 1.75 3.2 1.75ZM2.3 4.25994V11.375C2.3 11.8582 2.70294 12.25 3.2 12.25H15.8C16.2971 12.25 16.7 11.8582 16.7 11.375V4.25995L10.9977 7.95588C10.0908 8.54371 8.90925 8.54371 8.00232 7.95588L2.3 4.25994ZM0.5 2.625C0.5 1.17525 1.70883 0 3.2 0H15.8C17.2912 0 18.5 1.17525 18.5 2.625V11.375C18.5 12.8247 17.2912 14 15.8 14H3.2C1.70883 14 0.5 12.8247 0.5 11.375V2.625Z"
                          fill="#6F767E"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3">
                    {errors.email ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-exclamation-triangle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z" />
                        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                      </svg>
                    ) : (
                      <svg
                        role="alert"
                        className="text-light-primary dark:text-dark-primary"
                        width="19"
                        height="14"
                        viewBox="0 0 19 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.2 1.75H15.8C16.1476 1.75 16.4492 1.9416 16.5991 2.2221L9.99924 6.4998C9.69693 6.69574 9.30309 6.69574 9.00078 6.4998L2.40088 2.22208C2.55081 1.94159 2.85239 1.75 3.2 1.75ZM2.3 4.25994V11.375C2.3 11.8582 2.70294 12.25 3.2 12.25H15.8C16.2971 12.25 16.7 11.8582 16.7 11.375V4.25995L10.9977 7.95588C10.0908 8.54371 8.90925 8.54371 8.00232 7.95588L2.3 4.25994ZM0.5 2.625C0.5 1.17525 1.70883 0 3.2 0H15.8C17.2912 0 18.5 1.17525 18.5 2.625V11.375C18.5 12.8247 17.2912 14 15.8 14H3.2C1.70883 14 0.5 12.8247 0.5 11.375V2.625Z"
                          fill="#6F767E"
                        />
                      </svg>
                    )}
                  </div>
                  <input
                    type="text"
                    id="email"
                    className={`${errors.email ? "bg-red-200 text-red-600" : "bg-light-input-bg text-light-primary dark:bg-dark-input-bg dark:text-dark-primary"} block w-full rounded-lg p-2.5  pe-10 ps-10 text-sm  placeholder:text-xs placeholder:font-semibold focus:outline-none focus:ring-0   dark:placeholder-gray-400`}
                    placeholder="Your Email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    onKeyUp={handleEmailChange}
                  />
                </div>
                <button
                  type="submit"
                  className={`${btnDisabled ? "opacity-25" : "opacity-100"} flex h-11 w-full flex-row items-center justify-center gap-1 rounded-full bg-primary text-sm font-semibold text-primary`}
                  disabled={btnDisabled}
                >
                  Continue
                </button>
              </form>
              <p className="pt-4 text-sm font-semibold text-secondary">
                This site is protected by reCAPTCHA and the Google Privacy
                Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SettingsAuth />
    </>
  );
};

export default Signup;
