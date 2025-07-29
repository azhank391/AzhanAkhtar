import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Menu,
} from "lucide-react";
import { toast } from "react-toastify";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiHeroku,
  SiNetlify,
  SiVercel,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import ResponsiveHeroSection from "../Components/HeroSection";
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});
  const [navOpen, setNavOpen] = useState(false); // Responsive: mobile nav
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const sections = document.querySelectorAll("[data-reveal]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setNavOpen(false); // Responsive: close nav on click
  };

  // ... projects, skills, techStack (unchanged)

  const projects = [
    // ... unchanged
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather App",
      description:
        "A responsive weather application with location-based forecasts, interactive maps, and beautiful UI animations.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["React", "OpenWeather API", "CSS3", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management Tool",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      liveUrl: "https://student-task-manager-front.vercel.app",
      githubUrl: "https://github.com/azhank391/student-task-manager-Front",
    },
  ];

  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      description: "React, JavaScript, HTML5, CSS3",
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      description: "Figma, Adobe Illustrator, Responsive Design",
    },
    {
      name: "Backend Development",
      icon: Smartphone,
      description: "Node.js, Express, MongoDB, REST APIs",
    },
    {
      name: "Version Control",
      icon: Github,
      description: "Git, GitHub, Version Control Systems",
    },
    {
      name: "Deployment",
      icon: ExternalLink,
      description: "Heroku, Netlify, Vercel, Railway",
    },
  ];

  const techStack = {
    Frontend: [
      { name: "React", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
    Backend: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "jwt", icon: SiJsonwebtokens },
    ],
    Database: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    "Tools & Others": [
      { name: "Git", icon: SiGit },
      { name: "Heroku", icon: SiHeroku },
      { name: "Netlify", icon: SiNetlify },
      { name: "Vercel", icon: SiVercel },
      { name: "Figma", icon: SiFigma },
      { name: "Postman", icon: SiPostman },
    ],
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) throw new Error("Oops! Something Went Wrong");
      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-neutral-900 text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-orange-400/20">
        <nav className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Portfolio
            </div>
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-4 sm:space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-all duration-300 hover:text-orange-400 ${
                      activeSection === section
                        ? "text-orange-400"
                        : "text-gray-300"
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>
            {/* Mobile Nav Button */}
            <button
              className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              onClick={() => setNavOpen(!navOpen)}
              aria-label="Open navigation"
            >
              <Menu className="w-7 h-7 text-orange-400" />
            </button>
          </div>
          {/* Mobile Nav Menu */}
          {navOpen && (
            <div className="md:hidden mt-4 bg-slate-900/95 rounded-lg shadow-lg flex flex-col space-y-2 py-4 px-4 absolute left-0 right-0 top-full z-50">
              {["home", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize py-2 px-2 text-left transition-all duration-300 rounded hover:bg-orange-400/10 ${
                      activeSection === section
                        ? "text-orange-400"
                        : "text-gray-300"
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <ResponsiveHeroSection/>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            data-reveal
            id="about-title"
            className={`text-center mb-10 sm:mb-16 transition-all duration-800 ease-out ${
              isVisible["about-title"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-center">
            <div
              data-reveal
              id="about-text"
              className={`transition-all duration-1000 ease-out ${
                isVisible["about-text"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-orange-300">
                Passionate Developer with 2+ Years of Experience
              </h3>
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                I'm a creative problem solver who loves turning complex
                challenges into simple, beautiful solutions. My journey in web
                development started with curiosity and has evolved into a
                passion for creating meaningful digital experiences.
              </p>
              <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or mentoring aspiring
                developers in my community. Click on the links below to connect
                with me on GitHub, LinkedIn, or send me an email. or You can
                also send me your details in the contact form at the end.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/azhank391"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-azhan-74931b250/"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:azhanakhtarcaia@gmail.com"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div
              data-reveal
              id="skills-grid"
              className={`transition-all duration-1000 ease-out ${
                isVisible["skills-grid"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="space-y-4 sm:space-y-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`bg-gradient-to-r from-slate-800 to-slate-700 p-4 sm:p-6 rounded-xl border border-orange-500/20 hover:border-orange-400/40 transition-all duration-600 hover:transform hover:scale-105 ${
                      isVisible["skills-grid"]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="flex items-center mb-2 sm:mb-3">
                      <skill.icon className="w-7 h-7 sm:w-8 sm:h-8 text-orange-400 mr-3 sm:mr-4" />
                      <h4 className="text-lg sm:text-xl font-semibold text-orange-300">
                        {skill.name}
                      </h4>
                    </div>
                    <p className="text-gray-400 text-sm sm:text-base">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            data-reveal
            id="skills-title"
            className={`text-center mb-10 sm:mb-16 transition-all duration-800 ease-out ${
              isVisible["skills-title"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-400 mx-auto"></div>
            <p className="text-gray-300 mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto">
              Here are the technologies and tools I work with to build amazing
              digital experiences
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {Object.entries(techStack).map(
              ([category, technologies], categoryIndex) => (
                <div
                  key={category}
                  data-reveal
                  id={`tech-category-${categoryIndex}`}
                  className={`transition-all duration-800 ease-out ${
                    isVisible[`tech-category-${categoryIndex}`]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 150}ms` }}
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8 text-orange-300">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                    {technologies.map((tech, techIndex) => (
                      <div
                        key={tech.name}
                        className={`bg-gradient-to-br from-slate-800 to-slate-700 p-4 sm:p-6 rounded-xl border border-orange-500/20 hover:border-orange-400/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 text-center group ${
                          isVisible[`tech-category-${categoryIndex}`]
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                        }`}
                        style={{
                          transitionDelay: `${
                            categoryIndex * 150 + techIndex * 50
                          }ms`,
                        }}
                      >
                        <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                          <tech.icon size={24} className="mx-auto" />
                        </div>
                        <p className="text-gray-300 font-medium text-xs sm:text-sm group-hover:text-orange-300 transition-colors duration-300">
                          {tech.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            data-reveal
            id="projects-title"
            className={`text-center mb-10 sm:mb-16 transition-all duration-800 ease-out ${
              isVisible["projects-title"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                data-reveal
                id={`project-${index}`}
                className={`bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl overflow-hidden border border-orange-500/20 hover:border-orange-400/40 transition-all duration-600 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 ${
                  isVisible[`project-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="h-40 sm:h-48 bg-gradient-to-br from-orange-600/20 to-amber-400/20 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-orange-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-orange-600/20 text-orange-300 px-2 sm:px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3 sm:space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center text-orange-400 hover:text-orange-300 transition-colors text-xs sm:text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center text-orange-400 hover:text-orange-300 transition-colors text-xs sm:text-sm"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            data-reveal
            id="contact-title"
            className={`text-center mb-10 sm:mb-16 transition-all duration-800 ease-out ${
              isVisible["contact-title"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-400 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div
              data-reveal
              id="contact-content"
              className={`text-center mb-8 sm:mb-12 transition-all duration-800 ease-out ${
                isVisible["contact-content"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
                Ready to bring your ideas to life? Let's discuss your next
                project.
              </p>
            </div>

            <div
              data-reveal
              id="contact-form"
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 transition-all duration-800 ease-out ${
                isVisible["contact-form"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-4 sm:p-6 rounded-xl border border-orange-500/20">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-orange-300">
                    Get In Touch
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-orange-400 mr-3" />
                      <a
                        href="mailto:azhanakhtarcaia@gmail.com"
                        className="text-gray-300 text-xs sm:text-base"
                      >
                        azhanakhtarcaia@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Github className="w-5 h-5 text-orange-400 mr-3" />
                      <a className="text-gray-300 text-xs sm:text-base">
                        https://github.com/azhank391
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Linkedin className="w-5 h-5 text-orange-400 mr-3" />
                      <a className="text-gray-300 text-xs sm:text-base">
                        https://www.linkedin.com/in/muhammad-azhan-74931b250/
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="space-y-3 sm:space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 sm:p-4 bg-slate-800 border border-orange-500/20 rounded-lg focus:border-orange-400 focus:outline-none text-white placeholder-gray-400 text-sm sm:text-base"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-3 sm:p-4 bg-slate-800 border border-orange-500/20 rounded-lg focus:border-orange-400 focus:outline-none text-white placeholder-gray-400 text-sm sm:text-base"
                />
                <textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 sm:p-4 bg-slate-800 border border-orange-500/20 rounded-lg focus:border-orange-400 focus:outline-none text-white placeholder-gray-400 resize-none text-sm sm:text-base"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t border-orange-500/20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400 text-xs sm:text-base">
            © 2025 Muhammad Azhan. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
