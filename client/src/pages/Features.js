import React from 'react';
import { Link } from 'react-router-dom';

function Features() {
  // EXPANDED FEATURE LIST (6 Items)
  const featuresList = [
    {
      icon: "👁️",
      title: "YOLOv8 Vision Engine",
      desc: "Powered by the latest YOLOv8 neural network, ensuring industry-leading accuracy in detecting wildlife even in low-light conditions."
    },
    {
      icon: "⚡",
      title: "Real-Time Latency",
      desc: "Optimized data pipeline processes video frames in <50ms, providing instant feedback to rangers without lag."
    },
    {
      icon: "📋",
      title: "Auto-Attendance",
      desc: "Automatically cross-references detected animals with the expected zone checklist to instantly identify missing species."
    },
    {
      icon: "🛡️",
      title: "Invasive Alert",
      desc: "Security mode triggers an immediate red-alert if an unauthorized predator or human is detected in a protected sanctuary."
    },
    {
      icon: "📊",
      title: "Historical Data",
      desc: "All detections are logged into a database, allowing researchers to visualize migration patterns and activity heatmaps over time."
    },
    {
      icon: "☁️",
      title: "Cloud Sync Ready",
      desc: "Designed with a modular architecture that allows data to be synced to AWS/Firebase for remote monitoring from any location."
    }
  ];

  return (
    <div className="page-container">
      <div className="features-section">
        
        {/* --- HEADER --- */}
        <div className="features-header animate-up">
          <h2>System Capabilities</h2>
          <p>
            Explore the technologies that make WildGuard AI the most advanced 
            wildlife monitoring solution available.
          </p>
        </div>
        
        {/* --- MAIN GRID --- */}
        <div className="features-grid">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card animate-up delay-${index % 3 + 1}`} 
            >
              <div className="icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* --- NEW SECTION: TECHNICAL SPECS --- */}
        <div style={{marginTop: '8rem', maxWidth: '1000px', marginInline: 'auto'}} className="animate-up">
          <h3 style={{fontSize: '2rem', textAlign: 'center', marginBottom: '2rem', color: 'white'}}>
            Technical Specifications
          </h3>
          
          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem',
            background: '#0a0f0c',
            padding: '2rem',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.05)'
          }}>
            <SpecItem label="AI Model" value="YOLOv8 Nano" />
            <SpecItem label="Framework" value="PyTorch & OpenCV" />
            <SpecItem label="Backend" value="Python Flask" />
            <SpecItem label="Frontend" value="React.js v18" />
            <SpecItem label="Accuracy" value="98.5% (mAP)" />
            <SpecItem label="Response Time" value="~45ms" />
          </div>
        </div>

        {/* --- CALL TO ACTION --- */}
        <div style={{textAlign: 'center', marginTop: '6rem', marginBottom: '2rem'}} className="animate-up">
          <h2 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>Ready to see it in action?</h2>
          <Link to="/test" className="btn-glow">
            Launch Live Demo
          </Link>
        </div>

      </div>
    </div>
  );
}

// Helper Component for the Spec Table
function SpecItem({ label, value }) {
  return (
    <div style={{textAlign: 'center', padding: '1rem', borderRight: '1px solid rgba(255,255,255,0.05)'}}>
      <div style={{color: '#666', fontSize: '0.9rem', marginBottom: '5px'}}>{label}</div>
      <div style={{color: '#10b981', fontWeight: 'bold', fontSize: '1.1rem'}}>{value}</div>
    </div>
  );
}

export default Features;