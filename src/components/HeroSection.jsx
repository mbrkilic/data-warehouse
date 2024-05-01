
function HeroSection() {
  return (
    <section id="about">
      <div className="container flex-col-reverse mt-20 mx-auto px-[15px] flex lg:flex-row items-center justify-center max-w-[1140px]">
        <div className="absolute max-w-[645px] mb-[50px] text-[#303669] lg:w-1/3 lg:pl-4 lg:pr-4 relative">
        
          <h1 className=" text-4xl font-bold  ">
            Save your data storage here.
          </h1>
          <p className="text-left text-lg pb-4 mt-3">
            Data Warehouse is a data storage area that has been tested for
            security, so you can store your data here safely but not be afraid
            of being stolen by others.
          </p>

          <button className="items-center hover:bg-blue-600 text-white px-10 py-3 rounded-full font-bold bg-pink-600">
            Learn More
          </button>
        </div>
        <div className="">
          <img
            className=" p-6 mx-auto"
            src="https://data-warehouse-landing-page.vercel.app/images/header.svg"
            alt="header"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
