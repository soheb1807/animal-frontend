import React from 'react';

function About() {
  return (
    <div className="page-container">
      
      {/* --- INLINE STYLES FOR FLOATING ANIMATION --- */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          .floating-img {
            animation: float 4s ease-in-out infinite;
            box-shadow: 0 20px 50px rgba(16, 185, 129, 0.2);
            border: 1px solid rgba(16, 185, 129, 0.3);
            border-radius: 20px;
          }
          .tech-card {
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.05);
            padding: 2rem;
            border-radius: 15px;
            transition: 0.3s;
          }
          .tech-card:hover {
            background: rgba(255,255,255,0.05);
            border-color: #10b981;
            transform: translateY(-5px);
          }
        `}
      </style>

      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        
        {/* --- HEADER --- */}
        <div className="features-header animate-up">
          <h2 style={{fontSize: '3.5rem'}}>Engineering The Future</h2>
          <p>
            Bridging the gap between <strong>Artificial Intelligence</strong> and <strong>Wildlife Conservation</strong>.
          </p>
        </div>

        {/* --- SECTION 1: THE MISSION (With AI Image) --- */}
        <div style={{
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '4rem', 
          alignItems: 'center',
          marginBottom: '8rem'
        }}>
          {/* Text */}
          <div className="animate-up delay-1">
            <h3 style={{color: '#10b981', fontSize: '2rem', marginBottom: '1.5rem'}}>
              The Conflict & The Code
            </h3>
            <p style={{color: '#a1a1aa', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '1.5rem'}}>
              Human-wildlife conflict is rising. Traditional monitoring methods are dangerous for rangers and intrusive for animals. 
              <br /><br />
              <strong>WildGuard AI</strong> solves this by deploying a passive, non-intrusive computer vision layer. By using 
              Deep Learning, the system identifies species instantly and flags anomalies without human intervention.
            </p>
            <div style={{display:'flex', gap:'10px', marginTop:'20px'}}>
               <div style={{background:'#10b981', height:'3px', width:'50px'}}></div>
            </div>
          </div>

          {/* Image: AI Brain / Chip */}
          <div className="animate-up delay-2" style={{display:'flex', justifyContent:'center'}}>
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="AI Technology" 
              className="floating-img"
              style={{width: '100%', maxWidth: '500px', height: 'auto'}}
            />
          </div>
        </div>

        {/* --- SECTION 2: SYSTEM ARCHITECTURE (How it works under the hood) --- */}
        <div className="animate-up" style={{marginBottom: '8rem'}}>
          <h3 style={{fontSize: '2rem', textAlign: 'center', marginBottom: '3rem'}}>System Architecture</h3>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
            
            {/* Step 1 */}
            <div className="tech-card">
              <div style={{fontSize:'3rem', marginBottom:'1rem'}}>📹</div>
              <h4 style={{fontSize:'1.3rem', color:'white', marginBottom:'10px'}}>Input Layer</h4>
              <p style={{color:'#888'}}>
                Live RTSP streams from CCTV or Drones are captured frame-by-frame using <strong>OpenCV</strong>.
              </p>
            </div>

            {/* Step 2 */}
            <div className="tech-card" style={{borderColor:'#10b981'}}>
              <div style={{fontSize:'3rem', marginBottom:'1rem'}}>🧠</div>
              <h4 style={{fontSize:'1.3rem', color:'#10b981', marginBottom:'10px'}}>Processing Core</h4>
              <p style={{color:'#888'}}>
                <strong>Python Flask</strong> feeds frames to the <strong>YOLOv8</strong> model which predicts bounding boxes and classes.
              </p>
            </div>

            {/* Step 3 */}
            <div className="tech-card">
              <div style={{fontSize:'3rem', marginBottom:'1rem'}}>💻</div>
              <h4 style={{fontSize:'1.3rem', color:'white', marginBottom:'10px'}}>Presentation</h4>
              <p style={{color:'#888'}}>
                <strong>React.js</strong> fetches the JSON analysis and renders the real-time dashboard and alerts.
              </p>
            </div>

          </div>
        </div>

        {/* --- SECTION 3: TECHNOLOGY CORE (Modified - No Name) --- */}
        <div style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(16,185,129,0.05) 100%)',
          borderRadius: '30px',
          padding: '4rem 2rem',
          border: '1px solid rgba(255,255,255,0.05)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }} className="animate-up">
          
          {/* Coding Setup Image */}
          <div style={{position: 'relative'}}>
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Coding Setup" 
              className="floating-img" 
              style={{width: '100%', borderRadius: '20px', animationDelay: '1s'}} 
            />  
          </div>

          {/* Project Details (General) */}
          <div>
            <h3 style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>Software Stack</h3>
            <p style={{color: '#10b981', fontSize: '1.2rem', marginBottom: '2rem', fontWeight:'600'}}>
              Open Source & Scalable
            </p>
            <p style={{color: '#a1a1aa', marginBottom: '2rem', lineHeight: '1.7'}}>
              The core of WildGuard AI is built on a modular architecture. It is designed to be easily deployed on edge devices like the <strong>NVIDIA Jetson Nano</strong> or standard cloud servers. 
              This ensures that wildlife parks with limited internet connectivity can still operate the system locally.
            </p>

            <div style={{display:'flex', flexWrap:'wrap', gap:'10px'}}>
              <SkillBadge text="JavaScript" />
              <SkillBadge text="React" />
              <SkillBadge text="Python" />
              <SkillBadge text="Deep Learning" />
              <SkillBadge text="SQL" />
            </div>
          </div>

        </div>

        {/* --- SECTION 4: FUTURE ROADMAP --- */}
        <div className="animate-up" style={{marginTop: '6rem', textAlign:'center'}}>
           <h3 style={{fontSize:'1.5rem', color:'#555', textTransform:'uppercase', letterSpacing:'2px'}}>Project Roadmap</h3>
           <div style={{display:'flex', justifyContent:'center', gap:'2rem', marginTop:'2rem', flexWrap:'wrap'}}>
              <RoadmapItem status="✅" text="Core Detection" />
              <RoadmapItem status="✅" text="Dashboard UI" />
              <RoadmapItem status="⏳" text="GPS Tracking" />
              <RoadmapItem status="⏳" text="Drone Integration" />
           </div>
        </div>

      </div>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function SkillBadge({ text }) {
  return (
    <span style={{
      background: 'rgba(255,255,255,0.05)',
      padding: '8px 15px',
      borderRadius: '50px',
      fontSize: '0.9rem',
      border: '1px solid rgba(255,255,255,0.1)',
      color: '#fff'
    }}>
      {text}
    </span>
  );
}

function RoadmapItem({ status, text }) {
  return (
    <div style={{
      background: '#0a0a0a',
      padding: '10px 20px',
      borderRadius: '8px',
      border: '1px solid #222',
      color: '#888'
    }}>
      <span style={{marginRight:'10px'}}>{status}</span> {text}
    </div>
  );
}

export default About;