import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Expense Tracker",
      description: "A web app to track daily expenses with category filters.",
      category: "Web",
      img: "https://via.placeholder.com/300", 
      live: "#",
      github: "#",
    },
    {
      title: "To-Do List App",
      description: "A simple yet powerful task manager with local storage.",
      category: "Web",
      img: "https://via.placeholder.com/300",
      live: "#",
      github: "#",
    },
    {
      title: "Weather App",
      description: "A real-time weather app using OpenWeather API.",
      category: "Web",
      img: "https://via.placeholder.com/300",
      live: "#",
      github: "#",
    },
    {
      title: "DineSPace",
      description: "A restaurant cafe seat reservation management app.",
      category: "Mobile",
      img: "https://via.placeholder.com/300",
      live: "#",
      github: "#",
    },
  ];

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="min-h-[90vh] mx-auto px-4 sm:px-6 lg:px-16 xl:px-36 py-6 md:py-16 text-[var(--text)] bg-[var(--bg)]">
      <h2 className="text-4xl text-[var(--primary)] font-bold border-b border-[var(--primary)] pb-3 mb-8">Projects</h2>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-6">
        {["All", "Web", "Mobile"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg transition font-medium cursor-pointer ${
              filter === category ? "bg-[var(--primary-color)] text-[var(--white-color)]" : "bg-gray-200 text-black"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-[var(--primary)]/20 p-6 rounded-xl shadow-md hover:bg-[var(--primary)]/30 transition">
            <img src={project.img} alt={project.title} className="w-full h-56 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-medium">{project.title}</h3>
            <p className="text-[var(--text)]/80 mt-2">{project.description}</p>
            <div className="mt-4 flex gap-4">
              <a href={project.live} className="px-4 py-2 bg-[var(--primary)] text-[var(--button-text)] rounded-lg font-medium transition duration-500 hover:bg-[var(--bg)] hover:text-[var(--text)]">Live Demo</a>
              <a href={project.github} className="px-4 py-2 bg-[var(--primary)] text-[var(--button-text)] rounded-lg font-medium transition duration-500 hover:bg-[var(--bg)] hover:text-[var(--text)]">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
