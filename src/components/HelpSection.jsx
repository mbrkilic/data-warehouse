

function HelpSection() {
  return (
    <section id="help">
        <div className="container mx-auto flex justify-center bg-[#f7e5f3] rounded-2xl max-w-[1140px] mt-5">
      <div className="container flex flex-col md:flex-row justify-evenly items-center mx-auto mt-20">
        <div className="w-full md:w-1/3">
          <img
            className="p-6 mx-auto"
            src="https://data-warehouse-landing-page.vercel.app/images/section-1.svg"
            alt=""
          />
        </div>
        <div className="w-full md:w-1/3 text-[#303669] pr-4 pl-4">
          <h2 className="text-4xl font-bold pb-6">
            We are a high-level data storage bank
          </h2>
          <p className="text-lg pb-4">
            The place to store various data that you can access at any time
            through the internet and where you can carry it. This very flexible
            storage area has a high level of security. To enter into your own
            data you must enter the password that you created when you
            registered in this Data Warehouse.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}

export default HelpSection;
