const Footer = () => {
  return (
    <div className="w-full container py-5">
      <div className="w-full flex flex-col lg:flex-row justify-between text-slate-700  dark:text-slate-100">
        <div className="lg:w-1/3 w-full lg:pr-5 pr-0">
          <h4>About</h4>
          <p className="text-justify text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div className="lg:w-1/3 w-full"> LInks</div>
        <div className="lg:w-1/3 w-full">Newletter</div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
