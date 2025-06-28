import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'


export default function App() {
  return (
    <Router>
      <div style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}