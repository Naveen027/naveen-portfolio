import './Navbar.css';
import {Link } from 'react-router-dom'

function Nabar() {
    return (
                <nav className="navbar navbar-expand-md  navbar-dark">
                    <Link className="navbar-brand" to="/"><img src='logo.png' /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="About">Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="Services">Career</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

               
       
    )
}

export default Nabar;