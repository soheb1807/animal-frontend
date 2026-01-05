import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 1. IMPORT YOUR LOCAL VIDEO FILE HERE
// (Make sure you created a folder called 'assets' inside 'src' and put video.mp4 there)
import bgVideo from '../assets/video.mp4'; 

function Home() {
  return (
    <div className="home-wrapper">
      
      {/* =========================================
          SECTION 1: HERO (VIDEO BACKGROUND)
          ========================================= */}
      <div className="hero-container">
        {/* VIDEO: Using the imported variable 'bgVideo' */}
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* Overlay to darken video slightly */}
        <div style={{position:'absolute', inset:0, background:'rgba(0,0,0,0.5)', zIndex:0}}></div>

        <div className="hero-content">
          <div className="animate-up">
            <span style={{
              background: 'rgba(16,185,129,0.2)', 
              color: '#10b981', 
              padding: '8px 20px', 
              borderRadius: '30px', 
              fontWeight: '700',
              textTransform: 'uppercase',
              fontSize: '0.85rem',
              letterSpacing: '1px'
            }}>
              System Online v1.0
            </span>
          </div>
          
          <h1 className="hero-title animate-up delay-1">
            Wild Guard <span style={{color:'#10b981'}}>AI</span>
          </h1>
          
          <p className="hero-desc animate-up delay-2">
            Advanced Computer Vision for wildlife conservation. 
            Monitoring habitats, tracking species, and ensuring safety through automation.
          </p>

          <div className="animate-up delay-3" style={{display:'flex', gap:'1rem', justifyContent:'center'}}>
            <Link to="/test" className="btn-glow">
              Launch Dashboard
            </Link>
            <Link to="/features" style={{
              padding: '1rem 2rem', 
              border: '1px solid rgba(255,255,255,0.3)', 
              borderRadius: '50px', 
              color:'white', 
              textDecoration:'none',
              fontWeight:'600',
              transition: '0.3s'
            }}
            onMouseOver={(e) => e.target.style.borderColor = '#10b981'}
            onMouseOut={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.3)'}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================
          SECTION 2: HOW IT WORKS
          ========================================= */}
      <FadeInSection>
        <div className="info-section">
          <h2 className="section-title">How The AI Works</h2>
          <p style={{color:'#9ca3af', maxWidth:'600px', margin:'0 auto'}}>
            Our system processes live video feeds to create a secure, automated monitoring environment.
          </p>
          
          <div className="steps-grid">
            {/* Step 1 */}
            <div className="step-card">
              <span className="step-number">01</span>
              <h3 style={{fontSize:'1.4rem', marginBottom:'10px', color: 'white'}}>Detect</h3>
              <p style={{color:'#888'}}>
                YOLOv8 algorithms scan the live feed to identify animal species with high precision.
              </p>
            </div>

            {/* Step 2 */}
            <div className="step-card">
              <span className="step-number">02</span>
              <h3 style={{fontSize:'1.4rem', marginBottom:'10px', color: 'white'}}>Analyze</h3>
              <p style={{color:'#888'}}>
                The system compares detected animals against the expected checklist for the specific zone.
              </p>
            </div>

            {/* Step 3 */}
            <div className="step-card">
              <span className="step-number">03</span>
              <h3 style={{fontSize:'1.4rem', marginBottom:'10px', color: 'white'}}>Alert</h3>
              <p style={{color:'#888'}}>
                If an animal is missing or a predator enters a safe zone, admins are instantly notified.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* =========================================
          SECTION 3: MISSION (SPLIT LAYOUT)
          ========================================= */}
      <FadeInSection>
        <div className="mission-section">
          <div className="mission-text">
            <h2 style={{fontSize:'2.5rem', marginBottom:'1.5rem', color: 'white'}}>Keeping Nature Safe</h2>
            <p style={{fontSize:'1.1rem', color:'#a1a1aa', lineHeight:'1.8', marginBottom:'2rem'}}>
              Traditional wildlife monitoring requires manual effort and is prone to human error. 
              WildGuard AI automates this process, providing 24/7 surveillance without fatigue.
              <br /><br />
              This project demonstrates the power of the MERN stack combined with Python AI 
              to solve real-world problems.
            </p>
            <ul style={{listStyle:'none', color:'#10b981', display:'flex', flexDirection:'column', gap:'10px'}}>
              <li>✓ 99% Uptime Monitoring</li>
              <li>✓ Instant Missing Reports</li>
              <li>✓ Secure Data Logging</li>
            </ul>
          </div>

          <div className="mission-image">
            {/* 👉 PLACEHOLDER: Ensure you have an image link here or import a local image */}
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYQsJhy05RQ9gTQrWN5MWCzWckwv3j-6D-g&s" 
              alt="Wildlife Monitoring" 
            />
            {/* Decorative Overlay */}
            <div style={{
              position:'absolute', bottom:0, left:0, width:'100%', 
              background:'linear-gradient(to top, #000, transparent)', 
              height:'50%'
            }}></div>
          </div>
        </div>
      </FadeInSection>

      {/* =========================================
          SECTION 4: TECH STACK
          ========================================= */}
      <FadeInSection>
        <div className="tech-section">
          <h3 style={{color:'#555', textTransform:'uppercase', letterSpacing:'2px', fontSize:'0.9rem'}}>Powered By</h3>
          <div className="tech-icons">
            <span className="tech-badge">⚛️ React.js</span>
            <span className="tech-badge">🐍 Python</span>
            <span className="tech-badge">👁️ OpenCV</span>
            <span className="tech-badge">🤖 YOLOv8</span>
            <span className="tech-badge">⚡ Flask</span>
          </div>
        </div>
      </FadeInSection>

      {/* FOOTER */}
      <footer style={{
          padding: '2rem', 
          textAlign: 'center', 
          color: '#666', 
          fontSize: '0.9rem', 
          borderTop: '1px solid #111',
          background: '#020403'
      }}>
        <p>© 2025 WildGuard AI Project. Developed by Sohebkhan Pathan.</p>
      </footer>

    </div>
  );
}

// === HELPER COMPONENT FOR SCROLL ANIMATION ===
function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    const currentElement = domRef.current;
    if (currentElement) {
        observer.observe(currentElement);
    }
    return () => {
        if (currentElement) {
            observer.unobserve(currentElement);
        }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default Home;