import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";

function Footer() {
  return (
    <div className=" mt-10  mx-auto py-10 text-center md:text-left container max-w-[1140px] justify-center ">
      <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* <!-- DW section --> */}
        <div className="">
          <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
            <span className="mr-4">
              <img
                src="https://data-warehouse-landing-page.vercel.app/images/logo.svg"
                alt=""
              />
            </span>
            Data Warehouse
          </h6>
          <p>
            Warehouse Society, 234 Bahagia Ave Street PRBW 29281
            info@warehouse.project 1-232-3434 (Main)
          </p>
        </div>
        {/* <!-- about section --> */}
        <div>
          <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
            About
          </h6>
          <p className="mb-2">
            <a href="#!">Profile</a>
          </p>
          <p className="mb-2">
            <a href="#!">Features</a>
          </p>
          <p className="mb-2">
            <a href="#!">Careers</a>
          </p>
          <p className="mb-2">
            <a href="#!">DW News</a>
          </p>
        </div>
        {/* <!-- help section --> */}
        <div>
          <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
            Help
          </h6>
          <p className="mb-2">
            <a href="#!">Support</a>
          </p>
          <p className="mb-2">
            <a href="#!">Sign Up</a>
          </p>
          <p className="mb-2">
            <a href="#!">Guide</a>
          </p>
          <p className="mb-2">
            <a href="#!">Reporst</a>
          </p>
          <p className="mb-2">
            <a href="#!">Q&A</a>
          </p>
        </div>

        <div>
          <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
            Social Media
          </h6>
          <div className="flex justify-center md:justify-start space-x-4 text-black">
            <a href="https://twitter.com/">
              <img src={twitter} alt="twitter" className="w-7" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={instagram} alt="instagram" className="w-7" />
            </a>
            <a href="https://www.facebook.com/">
              <img src={facebook} alt="facebook" className="w-7" />
            </a>
          </div>
        </div>
      </div>
      {/* <!--Copyright section--> */}
      <div className="mb-5 p-6 text-left font-light">
        <h6>© 2024 Copyright: Data Warehouse</h6>

        <a href="https://github.com/mbrkilic" className="text-blue-500">
          coded by mbrkilic
        </a>
      </div>
    </div>
  );
}

export default Footer;
