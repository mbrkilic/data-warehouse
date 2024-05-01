import { useState } from "react";
import { HiMenu } from "react-icons/hi";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    
    <nav className="flex justify-evenly items-center mb-4 top-0 w-full left-0 right-0 fixed bg-[#f5f6fb] pb-4">
    <div className="container flex justify-evenly flex-nowrap">

   
      <a className="mt-8" href="/">
        <img
          src="https://data-warehouse-landing-page.vercel.app/images/logo.svg"
          alt=""
          width={"40px"}
        />
      </a>

      <div className=" mt-5 items-center gap-3 hidden lg:flex">
        <ul className="capitalize flex space-x-6 text-lg mr-auto mt-2 text-[#7b7d7e] font-semibold">
          <li className=" hover:text-pink-600">
            <a href="/#about">about</a>
          </li>
          <li className="hover:text-pink-600">
            <a href="/#help">help</a>
          </li>
          <li className="hover:text-pink-600">
            <a href="/#features">features</a>
          </li>
          <li className="hover:text-pink-600">
            <a href="/#signup">sign up</a>
          </li>
        </ul>
      </div>
      <div className="lg:block hidden">
      <button className="bg-[#ffffff] hover:bg-pink-600 hover:text-white rounded-full p-4 mt-4 shadow-2xl">Request Demo</button>
      </div>
      <button onClick={toggleMenu} className="lg:hidden text-3xl justify-center items-center cursor-pointer">
        <HiMenu />
      </button>
      {isMenuOpen && (
        
        <div className="bg-[#f5f6fb] mt-4 absolute left-0 right-0 top-[50px] flex justify-center items-center ">

          <ul className="flex flex-col lg:flex-row text-lg font-semibold capitalize my-6 mx-auto">
          <li className=" hover:text-pink-600">
            <a href="/#about">about</a>
          </li>
          <li className="hover:text-pink-600">
            <a href="/#help">help</a>
          </li>
          <li className="hover:text-pink-600">
            <a href="/#features">features</a>
          </li>
          <li className="hover:text-pink-600">
            <a href="/#signup">sign up</a>
          </li>
          </ul>
        </div>
      )}
      </div>
    </nav>
  )
}

export default Navbar