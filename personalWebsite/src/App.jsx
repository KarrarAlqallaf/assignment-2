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
  const [language, setLanguage] = useState('Eng') // 'Eng' or 'Arb'

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  } 
  
  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'Eng' ? 'Arb' : 'Eng'));
  };

  // Helper object for simple content translation
  const text = {
    headerTitle: language === 'Eng' ? 'Karrar Alqallaf' : 'كرار القلاف',
    headerDescription: language === 'Eng' 
      ? 'King Fahd University of Petroleum and Minerals computer science student. Saudi born at 2004 in Qatif.'
      : 'طالب علوم حاسب بجامعة الملك فهد للبترول والمعادن. سعودي مواليد 2004 في القطيف.',
    projectsTab: language === 'Eng' ? 'Projects' : 'المشاريع',
    skillsTab: language === 'Eng' ? 'Skills' : 'المهارات',
    hobbiesTab: language === 'Eng' ? 'Hobbies' : 'الهوايات',
    skillsContent: language === 'Eng' ? 'Figma, Python, Java, React & more' : 'فيجما، بايثون، جافا، رياكت والمزيد',
    hobbiesContent: language === 'Eng' ? 'Motor Sport, Gaming & Fitness' : ' السيارات، الألعاب الرقمية و كمال الأجسام',
    contactTitle: language === 'Eng' ? 'Contact Me' : 'تواصل معي',
    namePlaceholder: language === 'Eng' ? 'Your Name' : 'اسمك',
    emailPlaceholder: language === 'Eng' ? 'Your Email' : 'بريدك الإلكتروني',
    messagePlaceholder: language === 'Eng' ? 'your message' : 'رسالتك',
    submitButton: language === 'Eng' ? 'Submit' : 'إرسال',
  } 

  return (
    // Set text direction based on language
    <div className = "appContainer" dir={language === 'Arb' ? 'rtl' : 'ltr'}> 
      
      {/* header section */}
      <Row justify="flex-start" padding="50px 0 0 0" dir="ltr"> 
      <button
      className={`languageBTN ${language === 'Eng' ? 'EngActive' : 'ArbActive'}`}
        onClick={toggleLanguage}
      >
        {/* Button displays the language it switches *to* */}
        {language === 'Eng' ? 'عربي' : 'Engl'}
      </button>
      </Row>
     

      {/* --- Header Content Translation --- */}
      <Row>
        <Column>
          <h1 className='header-title'>
            {text.headerTitle}
          </h1>
            <p className='header-description'>
            {/* Split the Arabic description into lines if necessary, 
                but using a single variable is cleaner */}
            {text.headerDescription}
            </p>
        </Column>
        <Circle 
          imageSrc="/src/assets/Images/My circle image.png" 
          alt="Karrar Alqallaf profile picture"
        />
      </Row>
      
      {/* info section (Tabs) */}
      <Row>
        {/* --- Tabs Translation --- */}
        <button 
          className={`infoBTNs ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => handleTabClick('projects')}
        >
          {text.projectsTab}
        </button>
        <button 
          className={`infoBTNs ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => handleTabClick('skills')}
        >
          {text.skillsTab}
        </button>
        <button 
          className={`infoBTNs ${activeTab === 'hobbies' ? 'active' : ''}`}
          onClick={() => handleTabClick('hobbies')}
        >
          {text.hobbiesTab}
        </button>
      </Row>

      {/* Content sections - only show active tab */}
      {/* (ProjectContainer titles should be updated inside ProjectContainer component 
          if it needs to be multilingual) */}
      {activeTab === 'projects' && (
        <Row>
          <ProjectContainer 
            title="Collapsed Tabs Titles" // Assuming titles are static/English
            imageSrc="/src/assets/Images/project1 img.png"
            url="https://github.com/KarrarAlqallaf/Collapsed-Tabs-Titles-ZenMod"
          />
          <ProjectContainer 
            title="Jadwal GYM" // Assuming titles are static/English
            imageSrc="/src/assets/Images/Jadwal Page Karrar.png"
            url="https://www.figma.com/design/kcLsyUcdHoMwOS8iJ0dojI/SWE-web-project?node-id=0-1&t=65LVjJyRnZVvPRfZ-1"
          />
        </Row>
      )}

      {activeTab === 'skills' && (
        <Row>
          {/* --- Skills Content Translation --- */}
          <p className='shP'>{text.skillsContent}</p>
        </Row>
      )}

      {activeTab === 'hobbies' && (
        <Row>
          {/* --- Hobbies Content Translation --- */}
          <p className='shP'>{text.hobbiesContent}</p>
        </Row>
      )}

      {/* contact me section */}
      <Row padding = "15px 0" align="flex-end" gap='25px'>
        {/* --- Contact Title Translation --- */}
        <h2 className = 'contact'>{text.contactTitle}</h2>
        <p className='email'>s202267840@kfupm.edu.sa</p>
      </Row>
       <Row gap='25px' padding = "15px 0">   
        {/* --- Contact Form Placeholder Translation --- */}
        <textarea placeholder={text.namePlaceholder} id="name"></textarea>
        <textarea placeholder={text.emailPlaceholder} id="email"></textarea>
         </Row>
        <Row padding = "15px 0">
        <textarea 
          placeholder={text.messagePlaceholder} 
          id="message" 
          style={{width: "941px", height: "268px"}}
        ></textarea>
        </Row>
      <button className='infoBTNs'>{text.submitButton}</button>
      
    </div>
  )
}

export default App