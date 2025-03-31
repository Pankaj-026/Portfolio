export default function Projects() {
  return (
    <section className="min-h-[90vh] mx-auto p-8 text-[var(--text)] bg-[var(--bg)]">
      {/* Projects Title */}
      <h2 className="text-4xl font-bold border-b border-[var(--primary)] pb-3 mb-8">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="bg-[var(--primary)]/20 p-6 rounded-xl shadow-md hover:bg-[var(--primary)]/30 transition">
          <h3 className="text-2xl font-medium">Expense Tracker</h3>
          <p className="text-[var(--text)]/80 mt-2">
            A web app to track daily expenses with category filters.
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href="#"
              className="text-[var(--secondary)] font-medium">
              Live Demo
            </a>
            <a
              href="#"
              className="text-[var(--secondary)] font-medium">
              GitHub
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-[var(--primary)]/20 p-6 rounded-xl shadow-md hover:bg-[var(--primary)]/30 transition">
          <h3 className="text-2xl font-medium">To-Do List App</h3>
          <p className="text-[var(--text)]/80 mt-2">
            A simple yet powerful task manager with local storage.
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href="#"
              className="text-[var(--secondary)] font-medium">
              Live Demo
            </a>
            <a
              href="#"
              className="text-[var(--secondary)] font-medium">
              GitHub
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-[var(--primary)]/20 p-6 rounded-xl shadow-md hover:bg-[var(--primary)]/30 transition">
          <h3 className="text-2xl font-medium">Weather App</h3>
          <p className="text-[var(--text)]/80 mt-2">
            A real-time weather app using OpenWeather API.
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href="#"
              className="text-[var(--secondary)] font-medium">
              Live Demo
            </a>
            <a
              href="#"
              className="text-[var(--secondary)] font-medium">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
