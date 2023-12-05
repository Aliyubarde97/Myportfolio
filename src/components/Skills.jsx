import React from "react";

const Skills = () => {
    const skill = [
        {
            logo:"logo-html5",
            level:"Advance",
            count:78,
        },
        {
            logo:"logo-css3",
            level:"Expert",
            count:89,
        },
        {
            logo:"logo-nodejs",
            level:"Beginner",
            count:10,
        },
        {
            logo:"logo-react",
            level:"Beginner",
            count:10,
        },

    ]
  return (
    <section id="Skills" className="container py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-500 text-center">
        <h3 className="text-4xl font-semibold">
          my <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">my knowlegde</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
                {
                    skill?.map((skill, i) => (

                
          <div key={i}
            className="border-2 border-cyan-600 relative min-w-[10rem]
                    group        max-w-[16rem] bg-gray-900 p-10 rounded-xl"
          >
            <div
              style={{
                background: `conic-gradient(rgb(8,145,170) ${skill.count}%,
                #ddd ${skill.count}%)`,

              }}
              className="w-32 h-32 flex items-center justify-center
                                rounded-full"
            >
              <div className="text-6xl w-28 h-28 bg-gray-900 
              rounded-full flex items-center justify-center cursor-pointer group-hover:bg-cyan-700 text-white">
                <ion-icon name={skill.logo}></ion-icon>
              </div>
            </div>
            <p className="text-xl mt-3">{skill.level}</p>


          </div>
                  
                  ))
                }

        </div>
      </div>
    </section>
  );
};

export default Skills;
