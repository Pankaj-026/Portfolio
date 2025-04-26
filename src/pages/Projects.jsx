import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "SP Vision",
      description: "A video streaming platform for all your entertainment needs.",
      category: "Web",
      img: "https://res.cloudinary.com/drwy0czge/image/upload/v1745697508/homepage-of-amazon-prime-video-streaming-service-on-an-iphone-6-plus-FDTYNJ_kyeqqm.jpg",
      live: "https://spvision-9fbf3.web.app/",
      github: "https://github.com/Pankaj-026/SP-Vision",
    },
    {
      title: "Weather App",
      description: "A real-time weather app using OpenWeather API.",
      category: "Web",
      img: "https://res.cloudinary.com/drwy0czge/image/upload/v1743597755/Screenshot_2025-04-02_174016_biglmc.png",
      live: "https://sp-weather.netlify.app/",
      github: "https://github.com/Pankaj-026/SP-Weather",
    },
    {
      title: "SP Christmas",
      description: "Interactive animated greetings from Santa using parallax effect.",
      category: "Web",
      img: "https://res.cloudinary.com/drwy0czge/image/upload/v1743598368/Screenshot_2025-04-02_182232_rwo8to.png",
      live: "https://sp-christmas.netlify.app/",
      github: "https://github.com/Pankaj-026/SP-Christmas",
    },
    {
      title: "SP Books",
      description: "E-book marketplace with personalized recommendations and reading progress tracking.",
      category: "Web",
      img: "https://res.cloudinary.com/drwy0czge/image/upload/v1743597484/Screenshot_2025-04-02_180746_faboe7.png",
      live: "https://sp-book.netlify.app/",
      github: "https://github.com/Pankaj-026/SP-Book",
    },
    {
      title: "Trafalgar",
      description: "Healthcare services landing page with doctor booking and telehealth features.",
      category: "Web",
      img: "https://res.cloudinary.com/drwy0czge/image/upload/v1743599864/Screenshot_2025-04-02_184701_l9btcy.png",
      live: "https://sp-trafalgar.netlify.app/",
      github: "https://github.com/Pankaj-026/Trafalgar",
    },

    {
      title: "To-Do List App",
      description: "Productivity tool with priority tagging and cross-device synchronization.",
      category: "Web",
      img: "https://res.cloudinary.com/drwy0czge/image/upload/v1743597145/Screenshot_2025-04-02_180117_aszbxv.png",
      live: "https://sp-task.netlify.app/",
      github: "https://github.com/Pankaj-026/SP-ToDoList",
    },
    {
      title: "CarVision",
      description: "Car showcase platform featuring vehicle comparisons and virtual test drives.",
      category: "Web",
      img: "https://res.cloudinary.com/drwy0czge/image/upload/v1743601727/Screenshot_2025-04-02_191615_fklve0.png",
      live: "https://sp-pankaj.vercel.app/notFound",
      github: "https://sp-pankaj.vercel.app/notFound",
    },
    {
      title: "DineSPace",
      description: "A restaurant cafe seat reservation management app.",
      category: "Mobile",
      img: "https://res.cloudinary.com/drwy0czge/image/upload/v1743163448/AsaGagaKamon_EaterSD_KimberlyMotos_31of32___1_.7_fgao26.jpg",
      live: "https://drive.google.com/file/d/1ThsSdFfdae1nAKHJGpTNfbxnDK8e_YkY/view?usp=sharing",
      github: "https://github.com/Pankaj-026/DineSpace",
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="min-h-[90vh] mx-auto px-4 sm:px-6 lg:px-16 xl:px-36 py-6 md:py-16 text-[var(--text)] bg-[var(--bg)]">
      {/* Header */}
      <div className=" mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] border-b-2 border-[var(--primary)] pb-4 mb-8">
          Projects
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8 md:mb-12">
          {["All", "Web", "Mobile"].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 cursor-pointer rounded-lg transition-all duration-300 font-medium ${
                filter === category
                  ? "bg-[var(--primary)] text-[var(--button-text)]"
                  : "bg-[var(--primary)/10] text-[var(--text)] hover:bg-[var(--primary)/20]"
              }`}
              onClick={() => setFilter(category)}>
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-[var(--primary)/10] p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 md:h-56 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                {" "}
                {/* Added flex container for content */}
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--primary)] mb-2">
                  {project.title}
                </h3>
                <div className="min-h-[80px] md:min-h-[90px]">
                  {" "}
                  {/* Fixed height container */}
                  <p className="text-[var(--text)/80] line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Buttons - Will now always be at bottom */}
              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="flex-1 px-4 py-2 text-center bg-[var(--primary)] text-[var(--button-text)] rounded-md font-medium hover:bg-[var(--primary)/90] hover:text-[var(--primary)] border border-[var(--primary)] transition-colors duration-300">
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="flex-1 px-4 py-2 text-center border border-[var(--primary)] text-[var(--primary)] rounded-md font-medium hover:bg-[var(--primary)] hover:text-[var(--button-text)] transition-colors duration-300">
                  GitHub
                </a>
                {/* Buttons remain same */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
