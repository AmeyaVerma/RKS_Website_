import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import NetworkingPage from './pages/NetworkingPage'
import ServiceDetailPage from './pages/ServiceDetailPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/networking" element={<NetworkingPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
