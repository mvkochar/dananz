import { Link } from 'react-router-dom'
import './css/Header.css'

const Header = () => {
  return (
    <header className='header d-f jc-sb align-center'>
        <div><img src="/images/logo.svg" alt="Logo" /></div>
        <nav>
            <ul className="header-nav d-f align-center">
                <li className="header-nav-item"><Link to="/">Home</Link></li>
                <li className="header-nav-item"><Link to="/about">About Us</Link></li>
                <li className="header-nav-item"><Link to="/services">Services</Link></li>
                <li className="header-nav-item"><Link to="/teams">Our Teams</Link></li>
                <li className="header-nav-item"><Link to='/portfolio'>Portfolio</Link></li>
                <li className="header-nav-item header-nav-contact"><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header