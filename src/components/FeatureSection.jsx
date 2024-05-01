
function FeatureSection() {
  return (
    <section id="features">
        <div className="container max-w-[1140px] mt-12 justify-center mx-auto text-center">
      <div>
        <p className="font-bold mb-2 text-4xl">Features</p>
        <h2 className=" font-light text-[#303669] text-2xl mt-8  mr-0 mb-8 ml-20">
          Some of the features and advantages that we provide for those of you
          who store data in this Data Warehouse.{" "}
        </h2>
      </div>

      <div className="grid px-4 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 md:ml-5 lg:ml-5 gap-4 mt-10 justify-center">
        <section className=" hover:scale-110 flex flex-row bg-[#ebf7f7] rounded-3xl text-center hover:shadow-2xl w-full items-center ">
          <div className="flex justify-center w-1/3">
            <img
              src="https://data-warehouse-landing-page.vercel.app/images/box-image-1.svg"
              alt="card1"
            />
          </div>
          <div className="w-2/3">
            <h1 className="font-bold text-xl text-[#303669] mt-6">
              Search Data
            </h1>
            <p className="text-base text-[#000] mx-6 mt-5 ">
              Don’t worry if your data is very large, the Data Warehoue provides
              a search engine, which is useful for making it easier to find data
              effectively saving time.
            </p>
            <button className="items-center text-[#a4c4f3] text-xl font-bold hover:text-pink-600 m-8">
              Learn More
            </button>
          </div>
        </section>


        <section className="hover:scale-110 flex flex-row bg-[#f1edfb] rounded-3xl text-center hover:shadow-2xl w-full items-center ">
          <div className="flex justify-center w-1/3">
            <img
              src="https://data-warehouse-landing-page.vercel.app/images/box-image-2.svg"
              alt="card1"
            />
          </div>
          <div className="w-2/3">
            <h1 className="font-bold text-xl text-[#303669] mt-6">
              Search Data
            </h1>
            <p className="text-base text-[#000] mx-6 mt-5 ">
              Don’t worry if your data is very large, the Data Warehoue provides
              a search engine, which is useful for making it easier to find data
              effectively saving time.
            </p>
            <button className="items-center text-[#a4c4f3] text-xl font-bold hover:text-pink-600 m-8">
              Learn More
            </button>
          </div>
        </section>


        <section className=" hover:scale-110 flex flex-row bg-[#fbedf7] rounded-3xl text-center hover:shadow-2xl w-full items-center ">
          <div className="flex justify-center w-1/3">
            <img
              src="https://data-warehouse-landing-page.vercel.app/images/box-image-3.svg"
              alt="card1"
            />
          </div>
          <div className="w-2/3">
            <h1 className="font-bold text-xl text-[#303669] mt-6">
              Search Data
            </h1>
            <p className="text-base text-[#000] mx-6 mt-5 ">
              Don’t worry if your data is very large, the Data Warehoue provides
              a search engine, which is useful for making it easier to find data
              effectively saving time.
            </p>
            <button className="items-center text-[#a4c4f3] text-xl font-bold hover:text-pink-600 m-8">
              Learn More
            </button>
          </div>
        </section>


        <section className="hover:scale-110 flex flex-row bg-[#e6f3fb] rounded-3xl text-center hover:shadow-2xl w-full items-center ">
          <div className="flex justify-center w-1/3">
            <img
              src="https://data-warehouse-landing-page.vercel.app/images/box-image-4.svg"
              alt="card1"
            />
          </div>
          <div className="w-2/3">
            <h1 className="font-bold text-xl text-[#303669] mt-6">
              Search Data
            </h1>
            <p className="text-base text-[#000] mx-6 mt-5 ">
              Don’t worry if your data is very large, the Data Warehoue provides
              a search engine, which is useful for making it easier to find data
              effectively saving time.
            </p>
            <button className="items-center text-[#a4c4f3] text-xl font-bold hover:text-pink-600 m-8">
              Learn More
            </button>
          </div>
        </section>{" "}
      </div>
    </div>
    </section>
  );
}

export default FeatureSection;
