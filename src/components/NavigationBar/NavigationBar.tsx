import { Link } from 'react-router-dom'
import './NavigationBar.css'

export default function Navbar() {
  return (
    <nav>
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/secretpage" className="navbar-item">secret page:O</Link>
      </nav>
  )
} 