import React from 'react'
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaBootstrap, FaNpm, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiSketch, SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiGithub } from 'react-icons/si'

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
            <p><FaHtml5 className='skill-icon'/>HTML </p>
            <p><FaCss3Alt className='skill-icon'/>CSS </p>
            <p><FaSass className='skill-icon'/>SASS </p>
            <p><SiJavascript className='skill-icon'/> Javascript </p>
            <p><FaReact className='skill-icon'/>React JS </p>
            <p><SiNextdotjs className='skill-icon'/>Next JS </p>
            <p><FaBootstrap className='skill-icon'/>Bootstrap </p>
            <p><FaNpm className='skill-icon'/>NPM</p>
            <p><FaGitAlt className='skill-icon'/>Git</p>
            <p><SiGithub className='skill-icon'/>GitHub</p>
            
          </div>

          <div className="skills-row">
            <h3>Design Tools:</h3>
            <p><SiSketch className='skill-icon'/>Sketch </p>
            <p><SiFigma className='skill-icon'/>Figma </p>
            <p><SiAdobephotoshop className='skill-icon'/>Adobe Photoshop </p>
            <p><SiAdobeillustrator className='skill-icon'/>Adobe Illustrator </p>
            
          </div>
      </div>
      </div>
    </div>

  )
}

export default Skills