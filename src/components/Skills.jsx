import React from "react";

const skills = [
  "React", "Tailwind CSS", "JavaScript", "Node.js", "Express", "MongoDB", "Git", "Figma"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div key={skill} className="bg-white shadow p-4 rounded-lg text-center font-medium hover:shadow-lg transition">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
