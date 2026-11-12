
import { useState } from "react";
import "./App.css";

const slides = [
  {
    tag: "DESIGN THAT MOVES YOU",
    title: "Build a digital experience people love.",
    description:
      "We combine thoughtful design, responsive layouts and purposeful interactions to make every visit effortless."
  },
  {
    tag: "BUILT FOR EVERY SCREEN",
    title: "One seamless experience, everywhere.",
    description:
      "From desktop to mobile, every section adapts beautifully to the screen in front of you."
  },
  {
    tag: "INTERACTION WITH PURPOSE",
    title: "Make every click meaningful.",
    description:
      "Smooth animations, clear feedback and useful controls make browsing simple and enjoyable."
  }
];

const services = [
  {
    title: "Web Design",
    category: "Design",
    icon: "✦",
    description: "Modern and attractive website designs for every business."
  },
  {
    title: "Frontend Development",
    category: "Development",
    icon: "⌘",
    description: "Interactive websites built with React and modern technologies."
  },
  {
    title: "UX Strategy",
    category: "Strategy",
    icon: "◎",
    description: "Simple and user-friendly experiences for website visitors."
  },
  {
    title: "Responsive Design",
    category: "Development",
    icon: "▣",
    description: "Websites that work perfectly on phones, tablets and desktops."
  },
  {
    title: "Motion Design",
    category: "Design",
    icon: "✧",
    description: "Smooth animations and transitions for better interaction."
  },
  {
    title: "Product Planning",
    category: "Strategy",
    icon: "↗",
    description: "Organized planning to turn creative ideas into digital products."
  }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav className="navbar container">
        <a href="#home" className="logo">
          <span className="logo-icon">N</span>
          Nexa<span>Flow</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#contact" className="nav-button" onClick={closeMenu}>
            Let's Talk ↗
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-text" key={currentSlide}>
          <span className="eyebrow">{slide.tag}</span>

          <h1>{slide.title}</h1>

          <p>{slide.description}</p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Start a Project ↗
            </a>

            <a href="#services" className="secondary-link">
              Explore Services →
            </a>
          </div>

          <div className="slider-controls">
            <button onClick={previousSlide} aria-label="Previous slide">
              ←
            </button>

            {slides.map((item, index) => (
              <button
                key={item.tag}
                className={currentSlide === index ? "active-dot" : "dot"}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}

            <button onClick={nextSlide} aria-label="Next slide">
              →
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-circle circle-one"></div>
          <div className="visual-circle circle-two"></div>

          <div className="visual-card">
            <span className="visual-label">CREATIVE DIGITAL STUDIO</span>
            <div className="visual-icon">✦</div>
            <h2>Ideas into Impact.</h2>
            <p>DESIGN • DEVELOP • DELIVER</p>
          </div>

          <div className="floating-card">
            <span>✧</span>
            <div>
              <strong>Creative Design</strong>
              <small>Made for people</small>
            </div>
          </div>

          <div className="floating-card second-card">
            <span>100%</span>
            <div>
              <strong>Responsive</strong>
              <small>Every screen matters</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Design",
    "Development",
    "Strategy"
  ];

  const filteredServices =
    filter === "All"
      ? services
      : services.filter(
          (service) => service.category === filter
        );

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">WHAT WE DO</span>
          <h2>Our Creative <span>Services</span></h2>
          <p>
            We create modern digital solutions that look beautiful
            and provide excellent user experiences.
          </p>
        </div>

        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={filter === category ? "filter-active" : ""}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="service-grid">
          {filteredServices.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <span className="service-category">
                {service.category}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact">Learn More ↗</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section" id="about">
      <div className="container about-content">
        <div>
          <span className="eyebrow">OUR APPROACH</span>
          <h2>Simple Ideas. <span>Powerful Results.</span></h2>
          <p>
            Great digital experiences start with understanding
            people. Our approach combines creativity, technology
            and attention to detail.
          </p>
        </div>

        <div className="process-list">
          <div className="process-item">
            <span>01</span>
            <div>
              <h3>Discover</h3>
              <p>Understand the goals and needs of every project.</p>
            </div>
          </div>

          <div className="process-item">
            <span>02</span>
            <div>
              <h3>Create</h3>
              <p>Design and develop an engaging digital experience.</p>
            </div>
          </div>

          <div className="process-item">
            <span>03</span>
            <div>
              <h3>Improve</h3>
              <p>Test, refine and optimize across different devices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Web Design",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ""
    });

    setSuccess(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a subject.";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message must contain at least 10 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        subject: "Web Design",
        message: ""
      });
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container contact-layout">
        <div className="contact-info">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>Let's Build Something <span>Great.</span></h2>
          <p>
            Have an idea or project in mind? Send us a message
            using the contact form.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h3>Send a Message</h3>

          {success && (
            <div className="success-message" role="status">
              ✓ Your form has been submitted successfully!
            </div>
          )}

          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
          />
          {errors.name && <small className="error">{errors.name}</small>}

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
          />
          {errors.email && <small className="error">{errors.email}</small>}

          <label htmlFor="subject">Select Subject</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          >
            <option>Web Design</option>
            <option>Frontend Development</option>
            <option>UI/UX Design</option>
            <option>Other</option>
          </select>

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            aria-invalid={!!errors.message}
          ></textarea>
          {errors.message && (
            <small className="error">{errors.message}</small>
          )}

          <button type="submit" className="primary-btn">
            Send Message ↗
          </button>

          <small className="form-note">
            Demo form: validation runs in your browser. No server
            or email delivery is connected.
          </small>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <a href="#home" className="logo">
          <span className="logo-icon">N</span>
          Nexa<span>Flow</span>
        </a>

        <p>Creating better digital experiences.</p>

        <a href="#home">Back to Top ↑</a>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} NexaFlow. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
