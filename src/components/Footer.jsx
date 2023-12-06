const Footer = () => {
  return (
    <div className="grid h-40 pt-5 border-t lg:pt-10 lg:mx-24 mx-14 lg:grid-cols-2">
      <div className="pb-5">
        <h1 className="text-2xl italic font-bold text-[#777d90]">Comfy</h1>
        <p className="text-[#9fa5bc] font-semibold text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="grid md:grid-cols-2 md:gap-[25rem] sm:gap-0 text-lg font-[400] pb-4">
        <div>
          <p className="text-[#777d90] cursor-pointer hover:text-[#9fa5bc] duration-200">
            shop@comfy.store.com
          </p>
          <p className="text-[#777d90] cursor-pointer hover:text-[#9fa5bc] duration-200">
            Twitter
          </p>
          <p className="text-[#777d90] cursor-pointer hover:text-[#9fa5bc] duration-200">
            Give Feedback
          </p>
        </div>
        <div>
          <p className="text-[#777d90] cursor-pointer hover:text-[#9fa5bc] duration-200">
            Media Kit
          </p>
          <p className="text-[#777d90] cursor-pointer hover:text-[#9fa5bc] duration-200">
            Terms of Use
          </p>
          <p className="text-[#777d90] cursor-pointer hover:text-[#9fa5bc] duration-200">
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
