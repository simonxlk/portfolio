import React from 'react'
import "./Skills.css";

function Skills() {
  return (
    <div id='skills_section'>
      <div className="intro-wrapper">
          <div className="intro-text">
            <h2>Hi, I'm Simon. Welcome to my tech Journey..</h2>
            <p>Since graduating from University, I have started a business 
              that helped people to find financial products, worked for 
              a sports betting company and currently I work for one of 
              the biggest retailers in the UK.</p>
              <p>
              This means at various stages I have; managed an entire 
              website, built landing pages, edited graphics and 
              created banners.  
              </p>
              <p>I have a genuine interest in technology and a 
                commitment to keep abreast of the latest web technologies.</p>
          </div>
      </div>
      <div className="skills-wrapper">
        <div className="skills-inner">
          <div className="skills-row row-1st">
            <h3>Developer languages and tools:</h3>
            <p>HTML </p>
            <p>CSS </p>
            <p>SASS </p>
            <p>Javascript </p>
            <p>React JS </p>
            <p>Next JS </p>
            <p>JQuery </p>
            <p>Bootstrap </p>
            <p>NPM</p>
            <p>Git</p>
            
          </div>

          <div className="skills-row">
            <h3>Design Tools:</h3>
            <p>Sketch </p>
            <p>Figma </p>
            <p>Adobe Photoshop </p>
            <p>Adobe Illustrator </p>
            
          </div>
      </div>
      </div>
    </div>

  )
}

export default Skills