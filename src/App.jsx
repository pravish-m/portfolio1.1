import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CodeXml,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import {
  defaultCertifications as certifications,
  defaultProfileImage as profileImage,
  defaultProjects as projects,
  defaultSkillGroups as skillGroups,
} from './data/portfolioDefaults'
import './App.css'

const contactLinks = [
  {
    label: 'GitHub',
    value: 'github.com/pravish-m',
    href: 'https://github.com/pravish-m',
    Icon: CodeXml,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/pravish-m-870820321',
    href: 'https://www.linkedin.com/in/pravish-m-870820321',
    Icon: BriefcaseBusiness,
  },
  {
    label: 'Email',
    value: 'pravishpika@gmail.com',
    href: 'mailto:pravishpika@gmail.com',
    Icon: Mail,
  },
  {
    label: 'Mobile',
    value: '+91 93618 54660',
    href: 'tel:+919361854660',
    Icon: Phone,
  },
]

const internshipHighlights = [
  'Built practical AI applications with Python and Streamlit.',
  'Used Google Gemini API, OpenAI API, and LangChain for LLM-based development.',
  'Practiced prompt engineering, API integration, testing, debugging, and AI output refinement.',
  'Explored chatbot, document-processing, and image-generation concepts; prepared technical documentation.',
]

const coreStrengths = [
  'Problem solving',
  'Quick learning',
  'Critical thinking',
  'Communication',
  'Teamwork',
  'Self-learning',
  'Technical documentation',
]

const careerInterests = [
  'Data Science',
  'Machine Learning',
  'AI/ML Engineering',
  'Generative AI',
  'AI Application Development',
  'Data Analytics',
]

const currentYear = new Date().getFullYear()

function App() {
  async function handleDownloadResume() {
    const { downloadResumePdf } = await import('./lib/generateResumePdf')
    downloadResumePdf({
      projects,
      certifications,
      skillGroups,
      strengths: coreStrengths,
      internshipHighlights,
    })
  }

  return (
    <div className="portfolio-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Pravish M home">
          PRAVISH<span>.</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="topbar-link" href="#resume" onClick={(event) => { event.preventDefault(); handleDownloadResume() }}>
          Resume <Download size={15} aria-hidden="true" />
        </a>
      </header>

      <main>
        <section className="profile" id="home" aria-labelledby="profile-title">
          <div className="profile-copy">
            <p className="eyebrow"><span aria-hidden="true">✦</span> AI & DATA SCIENCE</p>
            <h1 id="profile-title">Pravish M<span>.</span></h1>
            <p className="profile-role">AI & Data Science Student</p>
            <p className="intro">
              Motivated Artificial Intelligence and Data Science student with hands-on experience in Generative AI, Machine Learning, Data Science, and AI application development. Skilled in Python, machine learning, Streamlit, API integration, prompt engineering, and LLM-based applications. Completed a Generative AI internship at Nandha Infotech, Coimbatore.
            </p>
            <p className="profile-location"><MapPin size={16} aria-hidden="true" /> Coimbatore, Tamil Nadu, India</p>
            <div className="profile-actions">
              <a
                className="primary-action"
                href="https://github.com/pravish-m"
                target="_blank"
                rel="noreferrer"
              >
                <CodeXml size={18} aria-hidden="true" />
                GitHub profile
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                className="resume-action"
                href="#resume"
                onClick={(event) => { event.preventDefault(); handleDownloadResume() }}
              >
                <Download size={17} aria-hidden="true" />
                Download resume
              </a>
              <a className="text-action" href="#contact">
                All contact details <ArrowDownRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="profile-facts" aria-label="Education summary">
              <div><strong>8.15</strong><span>Current CGPA</span></div>
              <div><strong>03</strong><span>B.Tech year</span></div>
              <div><strong>2026</strong><span>Internship</span></div>
            </div>
          </div>

          <figure className="portrait">
            <img
              src={profileImage}
              alt="Portrait of Pravish M"
            />
            <figcaption>
              <span>PROFILE IMAGE</span>
              <span>COIMBATORE / INDIA</span>
            </figcaption>
          </figure>
        </section>

        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <div className="projects-heading">
            <div>
              <p className="eyebrow"><span aria-hidden="true">✦</span> SELECTED WORK</p>
              <h2 id="projects-title">Projects.</h2>
            </div>
            <p className="projects-note">
              AI, data science, and machine learning applications. Explore the source on GitHub.
            </p>
          </div>
          <div className="project-grid">
            {projects.map(({ title, description, stack, href }) => (
              <article className="project-item" key={title}>
                <div className="project-meta">
                  <span aria-hidden="true">✦</span>
                  <span>PROJECT</span>
                </div>
                <h3>{title}</h3>
                <p className="project-description">{description}</p>
                <p className="project-stack">{stack}</p>
                <a className="project-link" href={href} target="_blank" rel="noreferrer">
                  View source <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="journey-section" id="journey" aria-label="Education and experience">
          <article className="journey-column">
            <p className="eyebrow"><span aria-hidden="true">✦</span> EDUCATION</p>
            <div className="journey-entry">
              <div className="journey-mark"><GraduationCap size={20} aria-hidden="true" /></div>
              <div>
                <p className="journey-date">B.TECH / 3RD YEAR</p>
                <h2>Artificial Intelligence & Data Science</h2>
                <p className="journey-place">United Institute of Technology, Coimbatore</p>
                <div className="academic-results">
                  <span><strong>8.15</strong> CGPA</span>
                  <span><strong>79%</strong> Class 10</span>
                  <span><strong>79%</strong> Class 12</span>
                </div>
              </div>
            </div>
          </article>

          <article className="journey-column">
            <p className="eyebrow"><span aria-hidden="true">✦</span> EXPERIENCE</p>
            <div className="journey-entry">
              <div className="journey-mark"><BriefcaseBusiness size={19} aria-hidden="true" /></div>
              <div>
                <p className="journey-date">JUNE 2026 - JULY 2026</p>
                <h2>Generative AI Intern</h2>
                <p className="journey-place">Nandha Infotech, Coimbatore</p>
                <ul className="experience-list">
                  {internshipHighlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
            </div>
          </article>
        </section>

        <section className="skills-section" id="skills" aria-labelledby="skills-title">
          <div className="skills-heading">
            <p className="eyebrow"><span aria-hidden="true">✦</span> TOOLS & TECHNOLOGIES</p>
            <h2 id="skills-title">Technical skills.</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map(({ label, skills }) => (
              <div className="skill-group" key={label}>
                <h3>{label}</h3>
                <p>{skills.join(', ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="details-section" aria-label="Certifications, strengths, and career interests">
          <article className="details-column">
            <p className="eyebrow"><span aria-hidden="true">✦</span> CERTIFICATIONS</p>
            <ul className="details-list">
              {certifications.map((certification) => (
                <li className="certification-item" key={certification.id ?? certification.title}>
                  <span>{certification.title}</span>
                  {certification.href && (
                    <a href={certification.href} target="_blank" rel="noreferrer">View certificate</a>
                  )}
                </li>
              ))}
            </ul>
          </article>
          <article className="details-column">
            <p className="eyebrow"><span aria-hidden="true">✦</span> CORE STRENGTHS</p>
            <ul className="strength-list">
              {coreStrengths.map((strength) => <li key={strength}>{strength}</li>)}
            </ul>
          </article>
          <article className="details-column">
            <p className="eyebrow"><span aria-hidden="true">✦</span> CAREER INTERESTS</p>
            <ul className="details-list interests-list">
              {careerInterests.map((interest) => <li key={interest}>{interest}</li>)}
            </ul>
          </article>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-heading">
            <p className="eyebrow"><span aria-hidden="true">✦</span> FIND ME ONLINE</p>
            <h2 id="contact-title">Let’s connect.</h2>
          </div>
          <div className="contact-list">
            {contactLinks.map(({ label, value, href, Icon }) => {
              const isExternal = href.startsWith('https://')

              return (
                <a
                  className="contact-link"
                  href={href}
                  key={label}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                >
                  <span className="contact-icon"><Icon size={19} aria-hidden="true" /></span>
                  <span className="contact-label">{label}</span>
                  <span className="contact-value">{value}</span>
                  <ArrowUpRight className="contact-arrow" size={17} aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {currentYear} Pravish M</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
