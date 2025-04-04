import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  // const [expressLogo, setExpressLogo] = useState("");

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

  // useEffect(() => {
  //   if (theme) {
  //     setExpressLogo("../../public/icons/express-dark.svg");
  //   } else {
  //     setExpressLogo("../../public/icons/express-svgrepo-com.svg");
  //   }
  // }, [theme]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_74dgnrs";
    const templateId = "template_ejcz38x";
    const publicKey = "iKUsHPTI3mAPfddyf";

    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);
      alert("Message Sent! We will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-[90vh] mx-auto px-4 sm:px-6 lg:px-16 xl:px-36 py-6 md:py-16 text-[var(--text)] bg-[var(--bg)]">
      <h2 className="text-4xl text-[var(--primary)] font-bold border-b border-[var(--primary)] pb-3 mb-8 md:mb-12">
        Contact Me
      </h2>

      <div className="w-full max-w-8xl mx-auto flex flex-col lg:flex-row gap-8 p-6 md:p-8 rounded-xl shadow-md">
        {/* Contact Info */}
        <div className="lg:flex-1 space-y-4 md:space-y-6">
          <h3 className="text-3xl font-bold">Let's Connect</h3>

          <p className="text-lg md:text-xl leading-relaxed">
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, Feel free
            to reach out for any collaboration or inquiries!
          </p>

          <div className="space-y-2">
            <p className="text-lg font-medium">
              <a
                href="https://mail.google.com/mail/?view=cm&to=pankajgupta1063@gmail.com"
                target="_blank">
                <strong>Email:</strong> pankajgupta1063@gmail.com
              </a>
            </p>

            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/pankaj026/"
                target="_blank"
                className={`text-4xl transition-transform hover:scale-110 ${
                  theme ? "text-[#ffffff]" : "text-[#0077b5]"
                }`}>
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Pankaj-026"
                target="_blank"
                className={`text-4xl transition-transform hover:scale-110 ${
                  theme ? "text-[#ffffff]" : "text-[#333]"
                }`}>
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="lg:flex-1 space-y-4 md:space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message..."
              rows="5"
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
              required></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-[var(--primary)] text-[var(--button-text)] cursor-pointer font-semibold rounded-lg hover:bg-[var(--bg)] hover:text-[var(--text)] border-2 border-[var(--primary)] transition-colors duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
