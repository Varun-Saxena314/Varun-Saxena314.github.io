import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal'; 
import docIcon from './assets/doc-icon.png';
import youtubeIcon from './assets/youtube_icon.png';
import profilepic from './assets/profilepic.jpg';
import gmailIcon from './assets/gmail_icon.png';
import linkedinIcon from './assets/linkedin_icon.png';
import githubIcon from './assets/github_icon.png';
import Typewriter from 'typewriter-effect';
import Java from './assets/java_logo.webp';
import Python from './assets/python_logo.png';
import HTML from './assets/HTML_logo.webp';
import CSSimg from './assets/CSS_logo.png';
import JS from './assets/JS_logo.webp';
import Reac from './assets/React_logo.webp';
import C from './assets/C_logo.png';
import SQL from './assets/SQL_logo.webp';


function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show2');
        } else {
          entry.target.classList.remove('show2');
        }
      });
    });

    const fades = document.querySelectorAll('.fade2');
    fades.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      org: 'ICF International',
      role: 'AI Software Developer Intern',
      dates: 'Jun. 2025 – Aug. 2025',
      bullets: [
        'Designed internal AI-driven automation tools to streamline creation, review, and evaluation of government contracts and RFP responses for consultants and program managers',
        'Integrated OpenAI agents into Microsoft 365 using Azure AI Foundry, Copilot, and Python, automating document parsing, summarization, and proposal scoring',
        'Boosted operational efficiency of contract workflows by 40%, reducing manual labor and accelerating proposal turnaround times across multiple business units',
      ],
    },
    {
      org: 'UVA School of Engineering',
      role: 'Computer Systems and Organizations 1 — Teaching Assistant',
      dates: 'Jan. 2025 – Present',
      bullets: [
        'Assisted with design and refinement of course content, including lectures, homework, and exams',
        'Held office hours and assisted in in-person lectures to 100+ students, teaching the fundamentals of binary, circuits, machine code, assembly, and C programming',
        'Achieved class averages of over 80% on exams and over 85% on homework, demonstrating improved student understanding',
      ],
    },
    {
      org: 'UVA School of Engineering',
      role: 'Intro to Cybersecurity — Teaching Assistant',
      dates: 'Jan. 2025 – Present',
      bullets: [
        'Assisted with the design and refinement of course content, including lectures, homework, and exams',
        'Held office hours and assisted in in-person lectures to 30+ students, teaching the fundamentals of Linux, networking, scanning, injections, cryptography, and other core topics',
        'Achieved class averages of over 70% on exams and over 90% on homework, demonstrating improved student understanding',
      ],
    },
    {
      org: 'Engauge',
      role: 'Machine Learning and AI Intern',
      dates: 'Aug. 2024 – Jan. 2025',
      bullets: [
        'Developed a spoken language processing AI that searched through student comments and questions during college lectures to categorize topics, enabling professors to efficiently address critical questions in real time',
        'Utilized Python’s NLTK library to parse pre-categorized comments from 20+ college lectures, training a model to accurately organize future lecture discussions based on relevance',
        'Deployed the AI model in 15+ STEM courses with 2,000+ students at the University of Maryland, resulting in a 30% increase in student engagement and 25% improvement in instructor responsiveness',
      ],
    },
    {
      org: 'UVA Machine Learning & Artificial Intelligence',
      role: 'Research Assistant',
      dates: 'Aug. 2024 – Jun. 2025',
      bullets: [
        'Created a new generative AI chatbot combining strengths from existing models for more accurate, seamless user interaction while lowering processing and maintenance costs',
        'Refined an open-source LLM to improve accessibility while maintaining accuracy and specialization found in closed-source models',
        'Achieved a 70% reduction in operational cost while maintaining benchmark performance, validated via automated regression tests',
      ],
    },
  ];

  const [xpIndex, setXpIndex] = React.useState(0);
  const [xpDir, setXpDir] = React.useState('right'); 

  const prevXp = () => {
    setXpDir('left');
    setXpIndex((i) => (i - 1 + experiences.length) % experiences.length);
  };
  const nextXp = () => {
    setXpDir('right');
    setXpIndex((i) => (i + 1) % experiences.length);
  };

const xp = experiences[xpIndex];

  return (
    <div>
      <Navbar />

      <section id="welcome" className="section welcome">
        <div className="welcome-left">
          <div className="typewriter-text">
            <Typewriter
              options={{
                strings: ['Hello World!', "I\'m Glad You\'re Here", 'Learn More About Me'],
                autoStart: true,
                loop: true,
                delay: 85,
                deleteSpeed: 50,
                pauseFor: 2500,
              }}
            />
          </div>

          <h1 className="im-Varun">I&apos;m Varun Saxena</h1>
          <p className="welcom">Welcome to my portfolio</p>

          <div className="social-icons">
            <a href="mailto:varunsaxena314@gmail.com" target="_blank" rel="noopener noreferrer">
              <div className="icon-wrapper">
                <img src={gmailIcon} alt="Gmail" className="icon" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/varun-saxena314" target="_blank" rel="noopener noreferrer">
              <div className="icon-wrapper">
                <img src={linkedinIcon} alt="LinkedIn" className="icon" />
              </div>
            </a>
            <a href="https://github.com/varun-saxena314" target="_blank" rel="noopener noreferrer">
              <div className="icon-wrapper">
                <img src={githubIcon} alt="GitHub" className="icon" />
              </div>
            </a>
          </div>
        </div>

        <div className="welcome-right">
          <div className="profile-pic-container">
            <img src={profilepic} alt="Profile" className="profile-pic" />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section about">
        <h1 className="size">About Me</h1>

        {/* Resume Button */}
        <div className="resume-hero">
          <button className="resume-cta" onClick={() => setResumeOpen(true)}>
            <img src={docIcon} alt="Doc Icon" style={{ width: '22px', marginRight: '8px' }} />
            View Resume
          </button>
        </div>

        <p className="size2">Here are the skills I&apos;m proficient at!</p>

        <div className="skills">
          <div className="fade2">
            <div className="skillCard">
              <img src={Java} alt="Java Logo" />
              <p1 style={{ marginTop: '20%' }}>Java</p1>
            </div>
          </div>
          <div className="fade2">
            <div className="skillCard">
              <img src={Python} alt="Python Logo" />
              <p1 style={{ marginTop: '20%' }}>Python</p1>
            </div>
          </div>
          <div className="fade2">
            <div className="skillCard">
              <img src={JS} alt="JavaScript Logo" />
              <p1 style={{ marginTop: '20%' }}>JavaScript</p1>
            </div>
          </div>
          <div className="fade2">
            <div className="skillCard">
              <img src={CSSimg} alt="CSS Logo" />
              <p1 style={{ marginTop: '20%' }}>CSS</p1>
            </div>
          </div>
          <div className="fade2">
            <div className="skillCard">
              <img src={HTML} alt="HTML Logo" />
              <p1 style={{ marginTop: '20%' }}>HTML</p1>
            </div>
          </div>
          <div className="fade2">
            <div className="skillCard">
              <img src={Reac} alt="React Logo" />
              <p1 style={{ marginTop: '20%' }}>React.JS</p1>
            </div>
          </div>
          <div className="fade2">
            <div className="skillCard">
              <img src={C} alt="C Logo" />
              <p1 style={{ marginTop: '20%' }}>C</p1>
            </div>
          </div>
          <div className="fade2">
            <div className="skillCard">
              <img src={SQL} alt="SQL Logo" />
              <p1 style={{ marginTop: '20%' }}>SQL</p1>
            </div>
          </div>
        </div>
      </section>

       <section id="projects" className="section projects">
  <h2 className="projects-title">Featured Projects</h2>

  <div className="project-grid">

    {/* Infracool */}
    <article className="project-card">
      <div className="project-card-inner">
        <div className="project-copy">
          <h3 className="project-title">Infracool — Urban Heat Index Predictor</h3>
          <p className="project-blurb">
            Flask app that predicts neighborhood heat index from urban features. 
            Built with Python and HTML, includes an interactive demo and machine learning model. Won first place at UVA's LMI data science challenge for best project.
          </p>
          <div className="project-tags">
            <span className="project-tag">Python</span>
            <span className="project-tag">Flask</span>
            <span className="project-tag">HTML</span>
            <span className="project-tag">ML</span>
          </div>
        </div>
        <div className="project-actions">
          <a
            className="icon-btn"
            href="https://github.com/EshaanJas/LMI"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            className="icon-btn"
            href="https://youtu.be/WF0MhUHZ7kE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <img src={youtubeIcon} alt="YouTube" />
          </a>
        </div>
      </div>
    </article>

    {/* Course Reviews */}
    <article className="project-card">
      <div className="project-card-inner">
        <div className="project-copy">
          <h3 className="project-title">Course Reviews</h3>
          <p className="project-blurb">
            Software Development class final project. Desktop application for browsing and reviewing courses. Built with 
            JavaFX, Java, and SQL with persistent storage for course data.
          </p>
          <div className="project-tags">
            <span className="project-tag">Java</span>
            <span className="project-tag">JavaFX</span>
            <span className="project-tag">SQL</span>
          </div>
        </div>
        <div className="project-actions">
          <a
            className="icon-btn"
            href="https://github.com/uva-cs3140-fa24/hw6-hw6-ycp9zs-maq7xv-kpy4fm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
      </div>
    </article>

    {/* Camping React Native */}
    <article className="project-card">
      <div className="project-card-inner">
        <div className="project-copy">
          <h3 className="project-title">Camp Finder Mobile</h3>
          <p className="project-blurb">
            Mobile app to discover campsites, plan trips, and log animals. 
            Built with React Native and JavaScript for cross-platform compatibility.
          </p>
          <div className="project-tags">
            <span className="project-tag">React Native</span>
            <span className="project-tag">JavaScript</span>
            <span className="project-tag">Firebase</span>
          </div>
        </div>
        <div className="project-actions">
          <a
            className="icon-btn"
            href="https://github.com/VinGuar/HooHacks"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
      </div>
    </article>

    {/* Data ETL Warehouse */}
    <article className="project-card">
      <div className="project-card-inner">
        <div className="project-copy">
          <h3 className="project-title">Data ETL Warehouse</h3>
          <p className="project-blurb">
            End-to-end data warehouse and ETL pipeline using MySQL, MongoDB, 
            NoSQL, and Python for large-scale analytics processing.
          </p>
          <div className="project-tags">
            <span className="project-tag">Python</span>
            <span className="project-tag">SQL</span>
            <span className="project-tag">MySQL</span>
            <span className="project-tag">MongoDB</span>
          </div>
        </div>
        <div className="project-actions">
          <a
            className="icon-btn"
            href="https://github.com/Varun-Saxena314/Varun-Saxena-DS-2002-Project1/tree/main/DS-2002-Project1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
      </div>
    </article>

  </div>
</section>


  <section id="experience" className="section experience">
  <h2 className="projects-title">Experience</h2>

  <div className="xp-wrap">
    <button className="xp-arrow xp-left" onClick={prevXp} aria-label="Previous experience">‹</button>

    <div className="xp-viewport">
      <article key={xpIndex} className={`xp-card xp-anim-in-${xpDir}`}>
        <div className="xp-frame">
          <header className="xp-head">
            <h3 className="xp-role">{xp.role}</h3>
            <div className="xp-meta">
              <span className="xp-org">{xp.org}</span>
              <span className="xp-dot">•</span>
              <span className="xp-dates">{xp.dates}</span>
            </div>
          </header>
          <ul className="xp-bullets">
            {xp.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      </article>
    </div>

    <button className="xp-arrow xp-right" onClick={nextXp} aria-label="Next experience">›</button>
  </div>

  <div className="xp-dots">
    {experiences.map((_, i) => (
      <button
        key={i}
        className={`xp-dotbtn ${i === xpIndex ? 'active' : ''}`}
        onClick={() => {
          setXpDir(i > xpIndex ? 'right' : 'left');
          setXpIndex(i);
        }}
        aria-label={`Go to item ${i + 1}`}
      />
    ))}
  </div>
</section>



      <Footer />

      {/* Resume Modal */}
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

export default App;
