import React from "react";

const About = () => {
  const info = [
    { text: "years Experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="About" className="container py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>

        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div
          className="flex md:flex-row flex-col-reverse items-center
                md:gap-6 gap-12 px-10 max-w-6xl mx-auto"
        >
          <div>
            <div className="text-gray-300 my-3">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                suscipit quibusdam ea ad velit provident repellendus doloremque.
                Dolorum quasi error quod voluptates doloremque illo nulla natus
                deserunt aperiam, rem aliquam! Earum, tempore inventore esse
                consequatur beatae error consequuntur quidem quis pariatur neque
                unde ex adipisci sint sunt debitis animi dolores ipsam
                aspernatur eaque quam natus? In consequuntur optio eum pariatur.
                Odio eius expedita a ea est. Dolore esse dignissimos iusto eaque
                corrupti deleniti architecto debitis iste libero fuga sed a
                tempore, corporis quod voluptate facere ea fugiat, ex enim iure.
                Ipsum nam repellendus qui autem cupiditate, harum magni alias
                adipisci, eligendi dignissimos debitis, totam eius nobis
                doloribus maxime similique rerum saepe excepturi natus sint
                esse. Fugiat sit error rem cumque! Labore illo provident
                mollitia distinctio non id architecto similique saepe est
                molestias exercitationem eveniet, assumenda facilis, esse,
                cumque voluptatibus consequatur fugiat consectetur ex? Eius hic
                adipisci commodi, ipsa consequatur pariatur?
              </p>
              <div className="flex mt-10 justify-center items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>
                      {""}
                    </h3>
                    <span>{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a
                href="../assets/img/alee.pdf"
                download
                className="flex justify-center items-center cursor-pointer"
              >
                <button className="btn-primary ">Download cv</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
