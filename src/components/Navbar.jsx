import React, { useEffect, useState } from "react";
import { Flowbite } from "flowbite-react";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const Menulinks = [
    { name: "HOME", link: "#Home" },
    { name: "ABOUT", link: "#About" },
    { name: "SKILLS", link: "#Skills" },
    { name: "PROJECT", link: "#Project" },
    { name: "CONTACT", link: "#contact" },
  ]
  

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <section className="container">
      <nav
        className={`fixed w-full left-0 top-0 z-[999] blurme ${
          sticky ? " bg-white/60 text-gray-900" : " text-white"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="mx-7">
            <h4 className="text-4xl uppercase font-bold">
              AI<span className="text-cyan-600">BARDE</span>
            </h4>
          </div>
          <div 
            className={`${
              sticky ? "md:bg-white/0 bg-white" : "bg-white"
            } text-gray-900 md:block hidden px-7 py-2 rounded-bl-full font-medium bg-white`}
          >
            <ul className="flex gap-1 scroll-smooth  items-center  py-6 text-lg">
              {Menulinks?.map((menu, i) => ( 
                
                <li
                  key={i}
                  className=" px-6 hover:text-cyan-600 cursor-pointer scroll-smooth "
                >
                  <a href={menu?.link}>{menu?.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div
              onClick={() => setOpen (!open)}
            className={`z-[999] text-cyan-900 text-3xl md:hidden m-5 cursor-pointer`}
          >
            <ion-icon name="menu-outline"></ion-icon>
          </div>
          <div
          
            className={`md:hidden text-gray-900 absolute bg-white w-2/3 h-screen cursor-pointer  font-medium top-0 sm:mb-10 ${
              open ? "right-0" : "right-[-100%]"
            }`}
          >
            <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
              {Menulinks?.map((menu, i) => (
                <li
                  key={i} 
                  className=" px-6 hover:text-cyan-600 cursor-pointer"
                >
                  <a href={menu?.link}>{menu?.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
