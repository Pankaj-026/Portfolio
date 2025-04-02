import { useEffect, useState } from "react";

export default function Skills() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  const [expressLogo, setExpressLogo] = useState("");

  useEffect(() => {
    const updateTheme = () => {
      setTheme(document.documentElement.classList.contains("dark"));
    };

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    
    if (theme) {
      setExpressLogo("/icons/express-dark.svg");
    } else {
      setExpressLogo("/icons/express-svgrepo-com.svg");
    }

  }, [theme]);

  const skills = [
    // Frontend
    {
      title: "React",
      category: "Frontend",
      img: "/icons/react.svg",
    },
    {
      title: "JavaScript",
      category: "Frontend",
      img: "/icons/js-svgrepo-com.svg",
    },
    {
      title: "Redux",
      category: "Frontend",
      img: "/icons/redux-svgrepo-com.svg",
    },
    {
      title: "Tailwind CSS",
      category: "Frontend",
      img: "/icons/tailwind-svgrepo-com.svg",
    },
    {
      title: "React Native",
      category: "Frontend",
      img: "/icons/react.svg",
    },
    {
      title: "HTML",
      category: "Frontend",
      img: "/icons/html-5-svgrepo-com.svg",
    },
    {
      title: "CSS",
      category: "Frontend",
      img: "/icons/css3-svgrepo-com.svg",
    },
    {
      title: "Bootstrap",
      category: "Frontend",
      img: "/icons/bootstrap-svgrepo-com.svg",
    },
  
    // Backend
    {
      title: "MongoDB",
      category: "Backend",
      img: "/icons/mongo-svgrepo-com.svg",
    },
    {
      title: "Node.js",
      category: "Backend",
      img: "/icons/node-js-svgrepo-com.svg",
    },
    {
      title: "Express.js",
      category: "Backend",
      img: expressLogo,
    },
    {
      title: "Firebase",
      category: "Backend",
      img: "/icons/firebase-svgrepo-com.svg",
    },
    {
      title: "MySQL",
      category: "Backend",
      img: "/icons/mysql-svgrepo-com.svg",
    },
    {
      title: "PHP",
      category: "Backend",
      img: "/icons/php-svgrepo-com.svg",
    },
  
    // Tools
    {
      title: "Git",
      category: "Tools",
      img: "/icons/git-svgrepo-com.svg",
    },
    {
      title: "GitHub",
      category: "Tools",
      img: "/icons/github-142-svgrepo-com.svg",
    },
    {
      title: "Docker",
      category: "Tools",
      img: "/icons/docker-svgrepo-com.svg",
    },
    {
      title: "Jest",
      category: "Tools",
      img: "/icons/jest-svgrepo-com.svg",
    },
    // {
    //   title: "Webpack",
    //   category: "Tools",
    //   img: "/icons/webpack-svgrepo-com.svg",
    // },
    {
      title: "Vite",
      category: "Tools",
      img: "/icons/vite-svgrepo-com.svg",
    },
    {
      title: "Parcel",
      category: "Tools",
      img: "/icons/parcel-icon-svgrepo-com.svg",
    },
  ];
  

  return (
    <section id="skills" className="min-h-[90vh] mx-auto px-4 sm:px-6 lg:px-16 xl:px-36 py-6 md:py-16 text-[var(--text)] bg-[var(--bg)]">
      <h3 className="text-4xl text-[var(--primary)] font-bold border-b border-[var(--primary)] pb-3 mb-8">
        Skills
      </h3>

      {/* Frontend Skill Categories */}
      <h4 className="text-2xl  pb-3 mt-8">Frontend</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2">
        {skills
          .filter((skill) => skill.category === "Frontend")
          .map((skill, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-3 rounded-md p-3 bg-zinc-300/35 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl shadow-md hover:bg-zinc-300/50 dark:hover:bg-[#ffffff0a] transition duration-300 ease-in-out">
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="w-10 h-10 object-cover" // Adjusted size for the image
                />
                <h3>{skill.title}</h3>
              </div>
            );
          })}
      </div>

      {/* Backend Skill Categories */}
      <h4 className="text-2xl  pb-3 mt-8">Backend</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2">
        {skills
          .filter((skill) => skill.category === "Backend")
          .map((skill, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-3 rounded-md p-3 bg-zinc-300/35 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl shadow-md hover:bg-zinc-300/50 dark:hover:bg-[#ffffff0a] transition duration-300 ease-in-out">
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="w-10 h-10 object-cover" // Adjusted size for the image
                />
                <h3>{skill.title}</h3>
              </div>
            );
          })}
      </div>

      {/* Tools & Others Skill Categories */}
      <h4 className="text-2xl  pb-3 mt-8">Tools & Others</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2">
        {skills
          .filter((skill) => skill.category === "Tools")
          .map((skill, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-3 rounded-md p-3 bg-zinc-300/35 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl shadow-md hover:bg-zinc-300/50 dark:hover:bg-[#ffffff0a] transition duration-300 ease-in-out">
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="w-10 h-10 object-cover" // Adjusted size for the image
                />
                <h3>{skill.title}</h3>
              </div>
            );
          })}
      </div>
    </section>
  );
}
