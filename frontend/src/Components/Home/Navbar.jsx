import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((open) => !open);
  };

  return (
    <div className="h-[5rem] ">
      <nav className="flex h-[100%] justify-between  bg-[#03031b] items-center relative">
        <div className="absolute pl-8 font-bold text-white r-4 z-1000 md:static">
          <a href="/">
            <img
              className="h-[40px] w-[120px]"
              src="/images/logo1.png"
              alt="Logo"
            ></img>
          </a>
        </div>
        <ul
          className={
            open
              ? "flex flex-col pt-[8rem] pl-8 gap-14 text-[white] absolute right-0 top-0 h-[100vh] w-[100vw] bg-[#03031b] z-10 "
              : "hidden sm:flex justify-between gap-4 md:gap-16 lg:gap-20 pr-8 text-white"
          }
        >
          <li>
            <Link to={"/"} onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link to={"/about"} onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={() => setOpen(false)}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to={"https://techeify.beehiiv.com/"}
              onClick={() => setOpen(false)}
              className="bg-[#3b3bcb] rounded-[8px] py-2 px-4 text-white font-bold"
            >
              Post
            </Link>
          </li>
          <li>
            <Link
              to={"https://techeify.beehiiv.com/subscribe"}
              onClick={() => setOpen(false)}
              className="bg-[#3b3bcb] rounded-[8px] p-2 text-white font-bold"
            >
              Subscribe
            </Link>
          </li>
        </ul>
        <div className="absolute z-40 pr-4 right-2 md:hidden ">
          <a href="#" className="text-white " onClick={handleClick}>
            {open ? <IoClose /> : <GiHamburgerMenu />}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
