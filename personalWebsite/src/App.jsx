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
          />
          <ProjectContainer 
            title="Jadwal GYM"
            imageSrc="/src/assets/Images/Jadwal Page Karrar.png" 
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
    </div>
  )
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
