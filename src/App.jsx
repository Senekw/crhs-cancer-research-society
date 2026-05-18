import { ExternalLink, Mail, Microscope, Brain, Users, CalendarDays, Presentation } from 'lucide-react';

const officerLink = 'https://docs.google.com/forms/d/e/1FAIpQLSc4ANO5YMXIKc0_X6SXSEFmEUVvuR1_NSKS59hCiRwwIGPl1Q/viewform';
const memberLink = 'https://docs.google.com/forms/d/e/1FAIpQLSe6P1e5gv2LLlf7xdrfqEBizH1zErdTkHMAI4tHaKlfm7N0tg/viewform';

const presentations = [
  {
    title: 'AI Detects Pancreatic Cancer Before Radiologists Can',
    desc: 'REDMOD, radiomics, and early pancreatic cancer detection using artificial intelligence.',
    tag: 'AI / Early Detection',
    file: '/ai-detects-pancreatic-cancer.pdf'
  },
  {
    title: 'Cold Emailing for Research Positions',
    desc: 'A practical student guide to contacting professors and earning research mentorship.',
    tag: 'Research Skills',
    file: '/cold-emailing-for-research-positions.pdf'
  },
  {
    title: 'Gastroesophageal Cancer: What’s on the Horizon',
    desc: 'FLOT, ESOPEC, MATTERHORN, surgery, ctDNA, and multidisciplinary care.',
    tag: 'Clinical Oncology',
    file: '/gastroesophageal-cancer-horizon.pdf'
  },
  {
    title: 'AI in Oncology: What’s Happening Right Now',
    desc: 'Virtual cancer clinics, AI pathology agents, and physician identity protection.',
    tag: 'AI / Oncology',
    file: '/ai-in-oncology-right-now.pdf'
  },
  {
    title: 'How Scientists Ask the Right Questions',
    desc: 'Immunotherapy timing, PEACE-3, clinical trial design, and critical appraisal.',
    tag: 'Study Design',
    file: '/how-scientists-ask-right-questions.pdf'
  },
  {
    title: 'AI at the Frontier of Personalized Cancer Care',
    desc: 'AI literacy, precision oncology, clinical workflows, and smarter trial design.',
    tag: 'Precision Oncology',
    file: '/ai-frontier-personalized-cancer-care.pdf'
  }
];

function Card({ children, className = '' }) {
  return <div className={`card ${className}`}>{children}</div>;
}

export default function App() {
  return (
    <main>
      <nav className="nav">
        <div>
          <h1>CRHS Cancer Research Society</h1>
          <p>Cinco Ranch High School</p>
        </div>
        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#presentations">Presentations</a>
          <a href="#apply">Apply</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroText">
          <span className="pill">Student-Led Oncology Research & Education</span>
          <h2>Advancing curiosity in cancer research, medicine, and innovation.</h2>
          <p>
            Cancer Research Society is a student organization focused on oncology education,
            scientific communication, research mentorship, and emerging discoveries in cancer care.
          </p>
          <div className="buttons">
            <a className="primary" href={memberLink} target="_blank" rel="noreferrer">
              Join as a Member <ExternalLink size={18} />
            </a>
            <a className="secondary" href={officerLink} target="_blank" rel="noreferrer">
              Apply as an Officer
            </a>
          </div>
        </div>

        <Card className="heroCard">
          <div className="treeCircle">🌳</div>
          <h3>Created by students. Backed by research mentors.</h3>
          <p>
            A platform for ASCO-style reviews, research workshops, poster preparation, and
            cancer science outreach.
          </p>
          <div className="stats">
            <div><b>120+</b><span>Followers</span></div>
            <div><b>6</b><span>Presentations</span></div>
            <div><b>2026</b><span>Research Cycle</span></div>
          </div>
        </Card>
      </section>

      <section id="about" className="section twoCol">
        <div>
          <span className="eyebrow">About CRS</span>
          <h2>Building future leaders in oncology and translational science.</h2>
          <p>
            Members learn how to read scientific literature, evaluate clinical trials, explain
            complex cancer topics clearly, and create professional presentations for students and
            the community.
          </p>
        </div>
        <div className="features">
          <Card><Microscope /><h3>Research Literacy</h3><p>Journal clubs, trial review, study design, and abstract/poster development.</p></Card>
          <Card><Brain /><h3>AI & Precision Medicine</h3><p>Educational reviews on AI, genomics, biomarkers, and personalized oncology.</p></Card>
          <Card><Users /><h3>Mentorship & Outreach</h3><p>Research opportunities, cold-email training, leadership, and community education.</p></Card>
        </div>
      </section>

      <section id="presentations" className="section darkSection">
        <div className="sectionHeader">
          <span className="eyebrow">Presentation Library</span>
          <h2>Featured CRS presentations</h2>
          <p>Check back daily for new oncology research updates, presentation highlights, and Cancer Research Society learning resources.</p>
        </div>
        <div className="grid">
          {presentations.map((item) => (
            <Card key={item.title}>
              <span className="tag"><Presentation size={14} />{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a className="smallBtn" href={item.file} target="_blank" rel="noreferrer">
                View Presentation <ExternalLink size={16} />
              </a>
            </Card>
          ))}
        </div>
      </section>

      <section id="apply" className="section">
        <div className="sectionHeader">
          <span className="eyebrow">Applications</span>
          <h2>Join or lead the society</h2>
          <p>Scan a QR code or click a button to access the correct Google Form.</p>
        </div>
        <div className="applyGrid">
          <Card className="qrCard">
            <img src="/officer-application-qr.png" alt="Officer Application QR Code" />
            <h3>Officer Application</h3>
            <p>Apply for leadership roles in research, outreach, social media, events, or education.</p>
            <a className="primary" href={officerLink} target="_blank" rel="noreferrer">
              Open Officer Form <ExternalLink size={18} />
            </a>
          </Card>
          <Card className="qrCard">
            <img src="/membership-application-qr.png" alt="Membership Application QR Code" />
            <h3>Membership Application</h3>
            <p>Join CRS to participate in presentations, research workshops, and oncology discussions.</p>
            <a className="primary blue" href={memberLink} target="_blank" rel="noreferrer">
              Open Membership Form <ExternalLink size={18} />
            </a>
          </Card>
        </div>
      </section>

      <section id="contact" className="section contact">
        <Card>
          <CalendarDays />
          <h2>Upcoming CRS activities</h2>
          <p>ASCO Post review series, research poster workshops, guest speaker sessions, and cancer awareness outreach.</p>
        </Card>
        <Card>
          <Mail />
          <h2>Contact</h2>
          <p><a href="mailto:crhscrs@gmail.com">crhscrs@gmail.com</a></p>
          <p><ExternalLink size={16} /> @crhscancerresearchsociety</p>
        </Card>
      </section>

      <footer>
        <p>© 2026 Cinco Ranch High School Cancer Research Society</p>
        <p>Educational content only. Not medical advice.</p>
      </footer>
    </main>
  );
}
