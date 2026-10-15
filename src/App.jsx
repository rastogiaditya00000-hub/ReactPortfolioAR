
import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
  ExternalLink,
  Download,
  MessageCircle,
  Code2,
  Database,
  Server,
  MonitorSmartphone,
  Sparkles,
  BriefcaseBusiness,
  GraduationCap,
  ChevronUp,
  Send
} from 'lucide-react';


// ==============================
// CONTACT DETAILS
// ==============================

const contact = {
  phone: 'tel:+918881413122',
  email: 'rastogi.aditya00000@gmail.com',
  whatsapp: 'https://wa.me/+918881413122',
  address: 'Moradabad - 244001, U.P., India',
  linkedin: 'https://www.linkedin.com/in/aditya-rastogi-50657a305',
  github: 'https://github.com/rastogiaditya00000-hub',
  resume: '/Aditya-Rastogi-Resume.pdf'
};


// ==============================
// SKILLS
// ==============================

const skills = [
  { name: 'HTML5', level: 92 },
  { name: 'CSS3', level: 90 },
  { name: 'JavaScript', level: 84 },
  { name: 'React', level: 82 },
  { name: 'Node.js', level: 76 },
  { name: 'Express.js', level: 74 },
  { name: 'MongoDB', level: 72 },
  { name: 'Git & GitHub', level: 80 },
];


// ==============================
// PROJECTS
// ==============================

const projects = [
  {
    title: 'Anant Clothing',
    type: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=520&q=82',
    description:
      'Full-stack e-commerce experience with product browsing, cart, authentication and a clean checkout flow.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://sprightly-bubblegum-419e9e.netlify.app',
    code: 'https://sprightly-bubblegum-419e9e.netlify.app'
  },
  {
    title: 'Railway Ticket booking ',
    type: 'Ticket Booking App',
    image: 'https://swarajya.gumlet.io/swarajya/2022-01/944e2114-2588-4a56-ab13-4a4e1f283e27/highspeedrailchina.jpg?w=610&q=75&compress=true&format=auto',
    description:
      'You just choose the destination, we’ll craft the journey.',
    stack: ['React', 'JavaScript', 'CSS'],
    live: 'https://trainticketbooking-peach.vercel.app',
    code: 'https://trainticketbooking-peach.vercel.app'
  },
  {
    title: 'Rastogi Tour And Travel',
    type: 'Tour And Travel',
    image: 'https://lh3.googleusercontent.com/grass-cs/ACvplmMDyh8b4eVHlEd8QMhejgkCEySU8KblvbU9xjxtqtkt62VsqHCgSO-KGByrT_qsK5ZwnLmsghZl_dtAdSmOu4y63fEY0C8XOBHSfXSq1e5KLycUOyaLO5pb44sU7RlomT0tdMKr=w326-h312-n-k-no',
    description:
      'Developed a responsive portfolio website showcasing my skills, projects, experience, and professional profile with a modern and user-friendly design.',
    stack: ['React', 'Express', 'MongoDB'],
    live: 'https://dynamic-griffin-d8f298.netlify.app',
    code: 'https://dynamic-griffin-d8f298.netlify.app'
  },
  {
    title: 'Real Estate Website',
    type: 'EstateHub — Real Estate Website',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    description:
      'A modern, responsive real estate platform for exploring and discovering properties',
    stack: ['React', 'REST API', 'JavaScript'],
    live: 'https://myrealestatewebsite.vercel.app',
    code: 'https://myrealestatewebsite.vercel.app'
  },
  {
    title: 'Foodie',
    type: 'Food Ordering Website',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    description:
      'A mobile-first restaurant and food ordering experience focused on clear UX and conversion-driven layout',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://statuesque-pika-2ffbcf.netlify.app/',
    code: 'https://statuesque-pika-2ffbcf.netlify.app/'
  },
  {
    title: 'Aditya Catering Services',
    type: 'Personal Brand',
    image: 'https://rastogiaditya00000-hub.github.io/adityacateringserviceswebsite/img/aclogo.png',
    description:
      'A modern personal portfolio made for showcasing skills, work, education and direct recruiter contact.',
    stack: ['React', 'CSS', 'Vite'],
    live: 'https://rastogiaditya00000-hub.github.io/adityacateringserviceswebsite',
    code: 'https://rastogiaditya00000-hub.github.io/adityacateringserviceswebsite'
  },
  {
    title: 'API Projects',
    type: 'API',
    image: 'apiimage.png',
    description:
      'Implemented API integration using Fetch API and React Hooks (useState, useEffect) for data fetching and state management.',
    stack: ['React', 'JS', 'Vite'],
    live: 'https://api-websites-m4ow.vercel.app/',
    code: 'https://github.com/rastogiaditya00000-hub/API-websites'
  }
];


// ==============================
// JOURNEY
// ==============================

const timeline = [
  {
    icon: GraduationCap,
    period: '2025 — Present',
    title: 'Full Stack Web Development',
    place: 'Self Learning / Training',
    text:
      'Building strong fundamentals in HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, Git and responsive web development.'
  },
  {
    icon: BriefcaseBusiness,
    period: 'Open to Opportunities',
    title: 'Frontend / MERN Developer',
    place: 'Internship / Junior Role',
    text:
      'Actively looking for a development company where I can contribute to real projects, learn from experienced developers and grow as an engineer.'
  }
];


// ==============================
// SECTION LABEL
// ==============================

function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <Sparkles size={15} /> {children}
    </div>
  );
}


// ==============================
// APP
// ==============================

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);


  // ==============================
  // SCROLL
  // ==============================

  useEffect(() => {

    const onScroll = () => {
      setShowTop(window.scrollY > 600);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };

  }, []);


  // ==============================
  // NAVIGATION
  // ==============================

  const go = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: 'smooth'
      });

    setMenuOpen(false);
  };


  // ==============================
  // EMAILJS CONTACT FORM
  // ==============================

  const submitContact = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        'service_c5u0mlx',
        'template_tz5tpxn',
        e.currentTarget,
        'NiuubzbBRMoXB3jjX'
      )
      .then(
        () => {

          alert('Message sent successfully!');

          e.currentTarget.reset();

        },
        (error) => {

          console.log('EmailJS Error:', error);

          alert(
            'Message could not be sent. Please try again.'
          );

        }
      );
  };


  // ==============================
  // RETURN
  // ==============================

  return (

    <div className="site-shell">

      <div className="noise" />


      {/* ================= HEADER ================= */}

      <header className="header">

        <a
          className="logo"
          href="#home"
          aria-label="Aditya home"
        >
          <span>AR</span>
          <strong>Aditya.</strong>
        </a>


        <nav className={menuOpen ? 'nav open' : 'nav'}>

          {[
            'home',
            'about',
            'skills',
            'projects',
            'journey',
            'contact'
          ].map((item) => (

            <button
              key={item}
              onClick={() => go(item)}
            >
              {item}
            </button>

          ))}

        </nav>


        <div className="header-actions">

          <a
            className="hire-btn"
            href={`mailto:${contact.email}`}
          >
            Hire Me <ArrowRight size={16} />
          </a>


          <button
            className="menu-btn"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {menuOpen
              ? <X />
              : <Menu />
            }

          </button>

        </div>

      </header>


      {/* ================= MAIN ================= */}

      <main>


        {/* ================= HERO ================= */}

        <section
          id="home"
          className="hero"
        >

          <div className="hero-copy reveal">

            <SectionLabel>
              AVAILABLE FOR DEVELOPMENT ROLES
            </SectionLabel>


            <p className="eyebrow">
              Hello, I’m
            </p>


            <h1>
              Aditya <span>Rastogi</span>
            </h1>


            <h2>
              I build <em>clean, useful & modern</em> web experiences.
            </h2>


            <p className="hero-text">

              Aspiring Full Stack Developer focused on the MERN stack.
              I enjoy turning ideas into responsive interfaces and
              practical web applications with thoughtful UI and clean code.

            </p>


            <div className="hero-cta">

              <button
                className="primary-btn"
                onClick={() => go('projects')}
              >
                View My Work <ArrowRight size={18} />
              </button>


              <a
                className="secondary-btn"
                href={contact.resume}
                download
              >
                <Download size={18} />
                Download Resume
              </a>

            </div>


            <div className="social-row">

              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </a>


              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>


              <a
                href={`mailto:${contact.email}`}
                aria-label="Email"
              >
                <Mail />
              </a>


              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle />
              </a>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div className="hero-visual">

            <div className="orb orb-one" />

            <div className="orb orb-two" />


            <div className="portrait-card">

              <div className="status-pill">
                <span />
                Open to work
              </div>


              <div className="avatar">
                <img style={{borderRadius:'100%'}} src='ar.jpg'/>
              </div>


              <div className="portrait-meta">

                <div>
                  <small>Based in</small>
                  <strong>
                    {contact.address}
                  </strong>
                </div>


                <div>
                  <small>Focus</small>
                  <strong>
                    MERN Stack
                  </strong>
                </div>

              </div>

            </div>


            <div className="floating-card code-card">

              <Code2 size={22} />

              <div>
                <small>Currently learning</small>
                <strong>React + Node</strong>
              </div>

            </div>


            <div className="floating-card build-card">

              <Sparkles size={20} />

              <div>
                <small>Goal</small>
                <strong>Build. Learn. Improve.</strong>
              </div>

            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section
          id="about"
          className="section about"
        >

          <div className="section-heading">

            <SectionLabel>
              ABOUT ME
            </SectionLabel>


            <h2>
              Developer mindset.
              <br />
              <span>Design awareness.</span>
            </h2>

          </div>


          <div className="about-grid">

            <div className="about-copy">

              <p className="lead">

                I’m Aditya Rastogi, an aspiring web developer currently
                learning full stack development with HTML, CSS, JavaScript,
                React, Node.js, Express.js and MongoDB.

              </p>


              <p>

                I like building projects that solve practical problems
                and look polished on every screen. My current goal is to
                join a development company as a fresher, intern or junior
                developer, work on real-world products and keep improving
                my engineering skills.

              </p>


              <p>

                I value readable code, responsive design, attention to
                detail and continuous learning. This portfolio contains
                sample projects—you can replace them with your real work
                as you build it.

              </p>


              <button
                className="text-link"
                onClick={() => go('contact')}
              >
                Let’s work together
                <ArrowRight size={18} />
              </button>

            </div>


            <div className="about-cards">

              <div className="metric-card">
                <strong>07+</strong>
                <span>Core technologies</span>
              </div>


              <div className="metric-card">
                <strong>06</strong>
                <span>Portfolio projects</span>
              </div>


              <div className="metric-card wide">
                <strong>100%</strong>
                <span>
                  Committed to learning & building
                </span>
              </div>

            </div>

          </div>

        </section>


        {/* ================= SKILLS ================= */}

        <section
          id="skills"
          className="section skills-section"
        >

          <div className="section-heading centered">

            <SectionLabel>
              TECH STACK
            </SectionLabel>


            <h2>
              Tools I’m learning
              <br />
              <span>and building with.</span>
            </h2>


            <p>
              Focused on modern frontend development
              with a growing backend foundation.
            </p>

          </div>


          <div className="skill-layout">

            <div className="skill-feature">

              <div className="skill-icon">
                <MonitorSmartphone />
              </div>

              <h3>Frontend</h3>

              <p>
                Responsive interfaces, layouts, components
                and user-focused experiences.
              </p>

              <div className="mini-stack">
                HTML · CSS · JavaScript · React
              </div>

            </div>


            <div className="skill-feature">

              <div className="skill-icon">
                <Server />
              </div>

              <h3>Backend</h3>

              <p>
                Server fundamentals, APIs, routing and
                application logic using JavaScript.
              </p>

              <div className="mini-stack">
                Node.js · Express.js · REST API
              </div>

            </div>


            <div className="skill-feature">

              <div className="skill-icon">
                <Database />
              </div>

              <h3>Database</h3>

              <p>
                Learning document-based data modeling
                and application database integration.
              </p>

              <div className="mini-stack">
                MongoDB · Mongoose
              </div>

            </div>

          </div>


          <div className="skill-bars">

            {skills.map((skill) => (

              <div
                className="skill-row"
                key={skill.name}
              >

                <div className="skill-top">

                  <span>
                    {skill.name}
                  </span>

                  <small>
                    {skill.level}%
                  </small>

                </div>


                <div className="bar">

                  <i
                    style={{
                      width: `${skill.level}%`
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <section
          id="projects"
          className="section projects-section"
        >

          <div className="projects-head">

            <div className="section-heading">

              <SectionLabel>
                SELECTED PROJECTS
              </SectionLabel>


              <h2>
                Things I’ve built
                <br />
                <span>while learning.</span>
              </h2>

            </div>


            <a
              className="text-link"
              href={contact.github}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
              <Github size={18} />
            </a>

          </div>


          <div className="projects-grid">

            {projects.map((project, idx) => (

              <article
                className="project-card"
                key={project.title}
              >

                <div className="project-image">

                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                  />

                  <span className="project-number">
                    0{idx + 1}
                  </span>

                </div>


                <div className="project-content">

                  <p className="project-type">
                    {project.type}
                  </p>


                  <h3>
                    {project.title}
                  </h3>


                  <p>
                    {project.description}
                  </p>


                  <div className="tag-row">

                    {project.stack.map((tag) => (

                      <span key={tag}>
                        {tag}
                      </span>

                    ))}

                  </div>


                  <div className="project-links">

                    <a href={project.live}>
                      Live Demo
                      <ExternalLink size={16} />
                    </a>


                    <a href={project.code}>
                      Source Code
                      <Github size={16} />
                    </a>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* ================= JOURNEY ================= */}

        <section
          id="journey"
          className="section journey-section"
        >

          <div className="section-heading centered">

            <SectionLabel>
              MY JOURNEY
            </SectionLabel>


            <h2>
              Learning today.
              <br />
              <span>Building for tomorrow.</span>
            </h2>

          </div>


          <div className="timeline">

            {timeline.map((item, idx) => {

              const Icon = item.icon;

              return (

                <div
                  className="timeline-item"
                  key={idx}
                >

                  <div className="timeline-dot">
                    <Icon size={20} />
                  </div>


                  <div className="timeline-card">

                    <small>
                      {item.period}
                    </small>


                    <h3>
                      {item.title}
                    </h3>


                    <strong>
                      {item.place}
                    </strong>


                    <p>
                      {item.text}
                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </section>


        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="section contact-section"
        >

          <div className="contact-card">


            {/* CONTACT INFORMATION */}

            <div className="contact-copy">

              <SectionLabel>
                GET IN TOUCH
              </SectionLabel>


              <h2>
                Have an opportunity?
                <br />
                <span>Let’s talk.</span>
              </h2>


              <p>

                I’m currently open to internships, fresher
                roles and junior web development opportunities.
                Feel free to reach out for interviews, projects
                or collaborations.

              </p>


              <div className="contact-list">

                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                >

                  <Phone />

                  <span>
                    <small>Phone</small>
                    {contact.phone}
                  </span>

                </a>


                <a
                  href={`mailto:${contact.email}`}
                >

                  <Mail />

                  <span>
                    <small>Email</small>
                    {contact.email}
                  </span>

                </a>


                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >

                  <MessageCircle />

                  <span>
                    <small>WhatsApp</small>
                    Chat on WhatsApp
                  </span>

                </a>


                <div>

                  <MapPin />

                  <span>
                    <small>Address</small>
                    {contact.address}
                  </span>

                </div>

              </div>

            </div>


            {/* ================= EMAILJS FORM ================= */}

            <form
              className="contact-form"
              onSubmit={submitContact}
            >

              <div className="field">

                <label>
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                />

              </div>


              <div className="field">

                <label>
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@company.com"
                />

              </div>


              <div className="field">

                <label>
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell me about the opportunity..."
                />

              </div>


              <button
                className="primary-btn submit-btn"
                type="submit"
              >

                Send Message
                <Send size={17} />

              </button>

            </form>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer>

        <div>

          <a
            className="logo"
            href="#home"
          >
            <span>AR</span>
            <strong>Aditya.</strong>
          </a>


          <p>
            Designed & built as a modern developer
            portfolio starter.
          </p>

        </div>


        <div className="footer-social">

          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>


          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>


          <a
            href={`mailto:${contact.email}`}
          >
            <Mail />
          </a>

        </div>


        <small>
          © 2026 Aditya Rastogi. All rights reserved.
        </small>

      </footer>


      {/* ================= BACK TO TOP ================= */}

      {showTop && (

        <button
          className="back-top"
          onClick={() => go('home')}
          aria-label="Back to top"
        >
          <ChevronUp />
        </button>

      )}

    </div>

  );
}


export default App;