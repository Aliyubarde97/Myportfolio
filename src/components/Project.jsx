import React from "react";
import p1 from '../assets/img/p1.png'
import p2 from '../assets/img/p2.png'
import p3 from '../assets/img/p3.png'
import p4 from '../assets/img/p4.png'
import p5 from '../assets/img/p5.png'
import p6 from '../assets/img/p6.png'
import p7 from '../assets/img/p7.png'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Project = () => {
  const links = [
    { img: p1, name: "ALA", GithubLink: "", Demo_link: '' },
    { img: p2, name: "ConaiSoft ACCT", GithubLink: "", Demo_link: '' },
    { img: p3, name: "ConiaSoftSQL", GithubLink: "", Demo_link: '' },
    { img: p4, name: "Portfolio", GithubLink: "", Demo_link: '' },
    { img: p5, name: "Hospital", GithubLink: "", Demo_link: ''},
    { img: p6, name: "KATDICT", GithubLink: "", Demo_link: ''},
    { img: p7, name: "Fashion Design", GithubLink: "", Demo_link: ''},
  ];
  return (
    <section id="Project" className="container py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          my <span className="text-cyan-600">Project</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">my awesome wroks</p>
      </div>
      <br />
      <div className="flex max-w-6xl px-5 mx-auto items-center justify-center relative">
        <div className="lg:w-2/3 w-full md:flex flex-row">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            // slidesPerView={'auto'}
            breakpoints={{
              // when window width is >= 576px
              576: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1024px
              1024: {
                spaceBetween: 10,
                slidesPerView: 2,
              },
            }}
            autoplay={{
              delay: 300,
            }}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {links.map((Project, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-cyan-600 rounded-xl">
                  <img src={Project.img} alt="" />
                  <h3 className="text-xl my-4">{Project.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={Project.GithubLink} target="blank"
                      className="bg-slate-800 rounded text-white hover:text-cyan-800 inline-block px-2 py-1 "
                    >
                      Github
                    </a>
                    <a
                      href={Project.Demo_link}
                      className="bg-slate-800 rounded text-white hover:text-cyan-800  inline-block px-2 py-1"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
