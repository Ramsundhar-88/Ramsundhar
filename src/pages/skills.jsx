import React from "react";

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Tailwind", "Express", "JWT","Python","Java"];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-[#1e293b] text-center">
      <h2 className="text-3xl font-semibold text-white mb-8">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-[#0f172a] text-gray-300 border border-gray-700 rounded-xl p-4 hover:border-indigo-500 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
