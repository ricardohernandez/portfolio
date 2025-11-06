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
      "url": "https://ricardohernandez.dev",
      "image": "https://ricardohernandez.dev/og-image.jpg",
      "description": "Full Stack Developer especializado en React, Node.js y tecnologías web modernas",
      "sameAs": [
        "https://github.com/ricardohernandez",
        "https://linkedin.com/in/ricardo-hernandez"
      ],
      "location": {
        "@type": "City",
        "name": "Santiago",
        "addressCountry": "CL"
      },
      "knowsAbout": ["React", "Node.js", "JavaScript", "Tailwind CSS", "Full Stack Development"]
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

