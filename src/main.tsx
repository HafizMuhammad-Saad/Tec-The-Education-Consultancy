import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About.tsx'
import OurJourney from './pages/OurJourney.tsx'
import Gallery from './pages/Gallery.tsx'
import Contact from './pages/Contact.tsx'
import OurServices from './pages/OurServices.tsx'
import TecBrowser from './pages/TecBrowser.tsx'
import LmsPage from './pages/LmsPage.tsx'
import CbtPage from './pages/CbtPage.tsx'
import SmsPage from './pages/SmsPage.tsx'
import Publications from './pages/Publications.tsx'
import Navbar from './components/Navbar.tsx'
import TopNav from './components/TopNav.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<><TopNav/><Navbar /><About /></>} />
        <Route path="/ourjourney" element={<><TopNav/><Navbar /><OurJourney /></>} />
        <Route path="/gallery" element={<><TopNav/><Navbar /><Gallery /></>} />
        <Route path="/contact" element={<><TopNav/><Navbar /><Contact /></>} />
        <Route path="/services" element={<><TopNav/><Navbar /><OurServices /></>} />
        <Route path="/tecbrowser" element={<><TopNav/><Navbar /><TecBrowser /></>} />
        <Route path="/lmspage" element={<><TopNav/><Navbar /><LmsPage /></>} />
        <Route path="/cbtpage" element={<><TopNav/><Navbar /><CbtPage /></>} />
        <Route path="/smspage" element={<><TopNav/><Navbar /><SmsPage /></>} />
        <Route path="/publications" element={<><TopNav/><Navbar /><Publications /></>} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
