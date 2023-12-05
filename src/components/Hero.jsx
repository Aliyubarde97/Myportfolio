import React from "react";
import hero from "../assets/img/mpic.png";

const Hero = () => {
  const Social_media = [
    "logo-linkedin",
    "logo-twitter",
    "logo-instagram",
    "logo-facebook",
   
  ];
  return (
    <section
      id="Home"
      className="container min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex justify-center items-center h-full mt-10 ">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center mt-10">
          <h1 className="md:text-3xl text-2xl md:leading-normal lading-10 text-white font-bold capitalize ">
            <span className="text-cyan-600 md:text-3xl text-3xl">
              hello!
              <br />
            </span>
            My Name is <span>ISMAIL A BARDE</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5
          mt-4 font-bold text-gray-600 ">FrontEnd Developer</h4>
          <button className="btn-primary capitalize mt-8">Contact me</button>
        </div>
        <div className= "text-white flex items-center gap-8 cursor-pointer  mt-8 text-2xl ">
          {Social_media?.map((icon) => (
            <div key={icon} className="hover:text-cyan-900  px-5">
              <ion-icon name={icon}></ion-icon>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
