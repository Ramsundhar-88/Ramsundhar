import React, { useEffect } from "react";
import { Code, Server, Database, Rocket, Wrench } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code />,
    color: "from-purple-500 to-pink-500",
    skills: [
      {
        name: "HTML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Tailwind",
        logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name:"Next.js",
        logo:"https://www.svgrepo.com/show/354113/nextjs-icon.svg"

      }
    ],
  },
  {
    title: "Backend",
    icon: <Server />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
      },
      {
        name: "JWT",
        logo: "https://img.icons8.com/color/512w/java-web-token.png",
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
    ],
  },
  {
    title: "Database",
    icon: <Database />,
    color: "from-emerald-500 to-teal-500",
    skills: [
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    title: "Other",
    icon: <Rocket />,
    color: "from-orange-500 to-red-500",
    skills: [
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "API Development",
        logo: "https://cdn-icons-png.flaticon.com/512/6460/6460629.png",
      },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench />,
    color: "from-yellow-400 to-orange-400",
    skills: [


      {
        name: "Postman",
        logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },

      {
        name: "Figma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },

    ],
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="skills" className=" py-20 px-4 text-white bg-[#1e293b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-4">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              data-aos="fade-up"
              className="group bg-white/5 backdrop-blur-2xl rounded-3xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:transform hover:scale-[1.02]"
            >
              <div className="text-center mb-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white/5  rounded-xl p-4 text-center text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
                    style={{
                      animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`,
                    }}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className={`h-6 sm:h-8 w-auto object-contain ${
                          skill.name === "Express" ? "brightness-200" : ""
                        }`}
                      />
                      <span className="text-sm">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
