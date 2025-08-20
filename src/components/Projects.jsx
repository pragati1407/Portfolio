import React from "react";

const projects = [
  {
    title: "NewsHive (React + APIs)",
    desc: "A news web application with category filtering, infinite scroll & news APIs.",
    link: "https://github.com/pragati1407/NewsHive"
  },
  {
    title: "Text Modifier App",
    desc: "A React-based tool to convert text, remove extra spaces & preview.",
    link: "https://github.com/pragati1407/Text-Modifier"
  },
  {
    title: "Culturize VR",
    desc: "Virtual Reality web app to explore cultural places with 360° views and narration.",
    link: "https://github.com/pragati1407/CulturizeVR"
  },
  {
    title: "iNotebook (MERN Notes App)",
    desc: "A secure note-taking app built with MongoDB, Express, React & Node with JWT auth.",
    link: "https://github.com/pragati1407/iNotebook"
  },
  {
    title: "Gleam Aura (Jewelry UI/UX design)",
    desc: "A luxury jewelry website interface designed with Figma for premium experience.",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project) => (
          <div key={project.title} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.desc}</p>
            <a href={project.link} target="_blank" rel="noreferrer" className="text-indigo-500 hover:underline">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
