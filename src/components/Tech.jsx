import React from "react";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  const categories = {
    "Languages": [
      "JavaScript/TypeScript",
      "C/C#/C++",
      "Go",
      "Python",
      "SQL",
      "HTML/CSS"
    ],
    "Frameworks": [
      "React",
      "Svelte",
      "Flask",
      "Next.js",
      "Node.js",
      "Three.js", 
      "TailwindCSS"
    ],
    "Databases": [
      "MySQL/MariaDB",
      "PostgreSQL",
      "SQLite",
      "Firebase",
      "Supabase", 
    ],
    "Developer Tools": [
      "Git",
      "Bash",
      "Windows Terminal/PowerShell",
      "VS Code",
      "Visual Studio",
      "Postman",
      "Prisma",
      "Amazon Web Services",
      "OpenAI",
      "LangChain",
      "FAISS",
      "OpenCV",
      "LaTeX"
    ]
  };

  return (
    <div className="flex flex-col gap-10 p-5">
      {Object.entries(categories).map(([category, items], idx) => (
        <div key={idx}>
          <h2 className="text-2xl font-bold text-white mb-4">{category}</h2>
          <div className="flex flex-wrap gap-4">
            {items.map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-neutral-800 text-pink-400 rounded-md shadow-md hover:scale-105 transition-transform"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
