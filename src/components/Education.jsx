import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "College of Engineering Roorkee (COER)",
      year: "2025",
      score: "81%"
    },
    {
      degree: "Intermediate (Class XII)",
      institution: "St. Xavier’s School, Bettiah",
      year: "2020",
      score: "80%"
    },
    {
      degree: "Matriculation (Class X)",
      institution: "St. Xavier’s School, Bettiah",
      year: "2018",
      score: "82%"
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-50 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {educationData.map((edu) => (
          <div
            key={edu.degree}
            className="border border-gray-200 bg-white p-6 rounded-md shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-700">{edu.institution}</p>
            <p className="text-gray-500">{edu.year}</p>
            <p className="text-indigo-600 font-medium">Score: {edu.score}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
