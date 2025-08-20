import React from "react";
import { FaTrophy, FaMedal, FaCertificate } from "react-icons/fa";

const Achievements = () => {
  const achievementsList = [
    {
      icon: <FaMedal className="text-yellow-500 mr-2" />,
      title: "1st Position in Academics (College of Engineering Roorkee)",
    },
    {
      icon: <FaTrophy className="text-orange-500 mr-2" />,
      title: "Winner – Hackathon at Gurukul Kangri University",
    },
    {
      icon: <FaCertificate className="text-green-600 mr-2" />,
      title: "Codolio Certification – Ranked top among cohort",
      link: "https://codolio.com/your-certificate-link"   // <-- put your real codolio link here
    },
    {
      icon: <FaCertificate className="text-purple-600 mr-2" />,
      title: "UI/UX Design Certification – Udemy Online Course",
    },
  ];

  return (
    <section id="achievements" className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Achievements</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {achievementsList.map((a, idx) => (
          <div
            key={idx}
            className="flex items-start bg-gray-50 border border-gray-200 p-4 rounded-lg"
          >
            <div className="text-2xl">{a.icon}</div>
            {a.link ? (
              <a
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 text-gray-700 hover:text-indigo-600 transition underline"
              >
                {a.title}
              </a>
            ) : (
              <p className="ml-3 text-gray-700">{a.title}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
