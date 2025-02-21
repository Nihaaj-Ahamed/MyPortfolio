import React from 'react'
import NavbarMain from "./components/navbar/NavbarMain"
import HeroMain from './components/heroSection/HeroMain'
import AboutMeMain from './components/aboutMe Section/AboutMeMain'
import HelperSection from './components/HelperSection'
import SkillMain from './components/skillsSection/SkillMain'
import ExperienceMain from './components/experience/ExperienceMain'
import ProjectMain from './components/projectSection/ProjectMain'
import ContactMeMain from './components/contactMe Section/ContactMeMain'
import FooterMain from './components/footer/FooterMain'

function App() {

  return (
    <main className="font-body  ">
      <NavbarMain/>
      <HeroMain/>
      <AboutMeMain/>
      <SkillMain/>
      <ExperienceMain/>
      <ProjectMain/>
      <ContactMeMain/>
      <FooterMain/>
    </main>
  )
}

export default App
