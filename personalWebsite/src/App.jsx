import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Circle from './Circle'
import Row from './Row'
import Column from './Column'
import './App.css'
import ProjectContainer from './projContainer'




const App = () => {
  const [activeTab, setActiveTab] = useState('projects')

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div>
      {/* header section */}
      <Row>
        <Column>
          <h1 className='header-title'>Karrar Alqallaf</h1>
            <p className='header-description'>
              King Fahd University of Petroleum and<br/>
              Minerals computer science student.<br/>
              Saudi born at 2004 in Qatif.
            </p>
        </Column>
        <Circle 
          imageSrc="/src/assets/Images/My circle image.png" 
          alt="Karrar Alqallaf profile picture"
        />
      </Row>
      
      {/* info section */}
      <Row>
        <button 
          className={`infoBTNs ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => handleTabClick('projects')}
        >
          Projects
        </button>
        <button 
          className={`infoBTNs ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => handleTabClick('skills')}
        >
          Skills
        </button>
        <button 
          className={`infoBTNs ${activeTab === 'hobbies' ? 'active' : ''}`}
          onClick={() => handleTabClick('hobbies')}
        >
          Hobbies
        </button>
      </Row>

      {/* Content sections - only show active tab */}
      {activeTab === 'projects' && (
        <Row>
          <ProjectContainer 
            title="Collapsed Tabs Titles"
            imageSrc="/src/assets/Images/project1 img.png"
            url="https://github.com/KarrarAlqallaf/Collapsed-Tabs-Titles-ZenMod"
          />
          <ProjectContainer 
            title="Jadwal GYM"
            imageSrc="/src/assets/Images/Jadwal Page Karrar.png"
            url="https://www.figma.com/design/kcLsyUcdHoMwOS8iJ0dojI/SWE-web-project?node-id=0-1&t=65LVjJyRnZVvPRfZ-1"
          />
        </Row>
      )}

      {activeTab === 'skills' && (
        <Row>
          <p className='shP'>Figma, Python, Java, React & more</p>
        </Row>
      )}

      {activeTab === 'hobbies' && (
        <Row>
          <p className='shP'>Motor Sport, Gaming & Fitness</p>
        </Row>
      )}

      {/* contact me section */}
      <Row   padding = "15px 0" align="flex-end" gap='25px'> 
        <h2 className = 'contact'>Contact Me</h2>
        <p className='email'>s202267840@kfupm.edu.sa</p>
      </Row>
       <Row gap='25px' padding = "15px 0">   
         <textarea placeholder="Your Name" id="name">
         </textarea>
         <textarea placeholder="Your Email" id="email">
         </textarea>
         </Row>
        <Row padding = "15px 0">
          <textarea placeholder='your message' id="message" style={{width: "941px", height: "268px"}}></textarea>
        </Row>
    </div>

  )
}



export default App
