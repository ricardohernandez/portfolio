import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // Schema.org structured data for better SEO
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ricardo Hernández",
      "jobTitle": "Full Stack Developer",
      "url": "https://portfolio-phi-opal-18.vercel.app",
      "image": "https://portfolio-phi-opal-18.vercel.app/og-image.jpg",
      "description": "Desarrollador Full Stack especializado en React, Node.js, Laravel y Vue.js. Construcción de aplicaciones web escalables y modernas.",
      "email": "ricardo.hernandez.esp@gmail.com",
      "telephone": "+56936394124",
      "sameAs": [
        "https://github.com/ricardohernandez"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Santiago",
        "addressRegion": "Región Metropolitana",
        "addressCountry": "CL"
      },
      "knowsAbout": [
        "React", 
        "Node.js", 
        "Laravel", 
        "Vue.js", 
        "JavaScript", 
        "TypeScript",
        "Tailwind CSS", 
        "MySQL",
        "PostgreSQL",
        "Docker",
        "Full Stack Development",
        "Web Development",
        "Frontend Development",
        "Backend Development"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Full Stack Developer",
        "occupationalCategory": "15-1254.00",
        "skills": "React, Node.js, Laravel, Vue.js, MySQL, Docker, Tailwind CSS"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </ThemeProvider>
  )
}

export default App

