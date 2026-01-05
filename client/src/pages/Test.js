import React, { useState, useEffect } from 'react';

function Test() {
  const [detected, setDetected] = useState([]);
  const [absent, setAbsent] = useState([]);
  
  // 1. CONFIG: Ensure these names match EXACTLY what your Python YOLO classes are named
  const expected = ['Lion', 'Zebra', 'Elephant', 'Tiger'];

  useEffect(() => {
    // Function to ask Python what it currently sees
    const fetchFromPython = async () => {
      try {
        // ▼▼▼ PATH 1: API ENDPOINT FOR DATA ▼▼▼
        // Your Python code must return JSON like: ["Lion", "Zebra"]
        const response = await fetch('http://127.0.0.1:5000/data'); 
        
        if (response.ok) {
          const data = await response.json(); // The list from Python
          
          setDetected(data); // Update the detected list

          // Logic to calculate who is missing (Comparing Python data vs Expected list)
          const missing = expected.filter(item => !data.includes(item));
          setAbsent(missing);
        }
      } catch (error) {
        console.error("Error connecting to Python backend:", error);
      }
    };

    // Run this check every 1 second (1000ms)
    const interval = setInterval(fetchFromPython, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'2rem'}}>
        <h2 style={{fontSize:'2rem'}}>🔴 Live Surveillance: Zone A</h2>
        <div style={{background:'#0f1a12', padding:'10px 20px', borderRadius:'10px', color:'#10b981'}}>
          Status: <strong>System Online</strong>
        </div>
      </div>

      <div className="dashboard-grid">
        
        {/* VIDEO FEED */}
        <div className="video-frame animate-up">
          <div className="live-badge">LIVE REC</div>
          
          {/* ▼▼▼ PATH 2: VIDEO STREAM URL ▼▼▼ */}
          {/* This <img> tag expects a 'Multipart Mixed Replace' stream from Flask/Django */}
          <img 
            src="http://127.0.0.1:5000/video_feed" 
            alt="Waiting for Python Video Stream..."
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
          />
          
        </div>

        {/* DATA PANEL */}
        <div className="panel animate-up delay-1">
          <h3 style={{marginBottom:'1.5rem', color:'#fff'}}>Detection Analytics</h3>
          
          <div style={{marginBottom:'2rem'}}>
            <h4 style={{color:'#10b981', marginBottom:'10px'}}>Present Animals</h4>
            {detected.length > 0 ? detected.map((a, i) => (
              <div key={i} className="stat-row">
                <span>{a}</span>
                <span style={{color:'#10b981'}}>Detected</span>
              </div>
            )) : <div style={{color:'#666'}}>Scanning...</div>}
          </div>

          <div>
            <h4 style={{color:'#ef4444', marginBottom:'10px'}}>Absent / Missing</h4>
            {absent.map((a, i) => (
              <div key={i} className="stat-row" style={{borderColor:'rgba(239, 68, 68, 0.2)'}}>
                <span>{a}</span>
                <span style={{color:'#ef4444'}}>Missing</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Test;