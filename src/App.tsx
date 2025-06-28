import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavigationBar/NavigationBar'
import Home from './Home'
import SecretPage from './secretpage'

export default function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secretpage" element={<SecretPage />} />
        </Routes>
      </div>
    </Router>
  )
}