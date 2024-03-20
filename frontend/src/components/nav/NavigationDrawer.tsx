import Logo from "../Logo";

const NavigationDrawer = ({ children, isOpen, setIsOpen }) => {
  return (
    <div
      className={
        "fixed inset-0 z-10 transform overflow-hidden bg-gray-900 bg-opacity-25 ease-in-out " +
        (isOpen
          ? " translate-x-0 opacity-100 transition-opacity duration-500  "
          : " translate-x-full opacity-0 transition-all delay-500  ")
      }
    >
      <section
        className={
          " delay-400 absolute left-0 h-full w-screen max-w-[340px] transform bg-white shadow-xl transition-all duration-500 ease-in-out  " +
          (isOpen ? " translate-x-0 " : " -translate-x-[340px] ")
        }
      >
        <div className="flex h-20 items-center justify-between px-4 py-3 text-white">
          <span className="text-xl font-bold">
            <Logo />
          </span>
          <button
            className="text-black focus:text-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <div className="">{children}</div>
        <section
          className=" h-full w-screen cursor-pointer "
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      </section>
    </div>
  );
};

export default NavigationDrawer;
