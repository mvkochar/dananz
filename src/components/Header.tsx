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
                <li className="header-nav-item"><a href="">Services</a></li>
                <li className="header-nav-item"><a href="">Our Teams</a></li>
                <li className="header-nav-item header-nav-contact"><a href="">Contact Us</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header