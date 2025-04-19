
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Project'
import Skills from './components/Skills'


function App() {


  return (
    <>
<Header />

<main>
  <section id="home">
    <Home />
  </section>

  <section id="about">
    <About />
  </section>

  <section id="skills">
    <Skills />
  </section>

  <section id="projects">
    <Projects />
  </section>

  <section id="contact">
    <Contact />
  </section>
</main>

<Footer />

    </>
  )
}

export default App
