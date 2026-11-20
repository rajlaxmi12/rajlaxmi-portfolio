import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProfileSelector from './components/ProfileSelector'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Research from './components/Research'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {

  const [activeProfile, setActiveProfile] =
    useState('software')


  return (
    <>

      <Navbar />

      <Hero activeProfile={activeProfile} />


      <ProfileSelector
        activeProfile={activeProfile}
        setActiveProfile={setActiveProfile}
      />


      <About
        activeProfile={activeProfile}
      />


      <Skills
        activeProfile={activeProfile}
      />


      <Projects
        activeProfile={activeProfile}
      />


      <Experience
        activeProfile={activeProfile}
      />

      {activeProfile === 'ai' && (
        <Research />
      )}

      <Education
        activeProfile={activeProfile}
      />

      <Achievements />

      <Contact />
    </>
  )

}


export default App