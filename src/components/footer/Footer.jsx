import { Link} from 'react-scroll';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBasketball} from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import './footer.css'

function Footer() {

    return (
        <footer className='container mb-4'>
            <div className="d-flex flex-column flex-md-row justify-content-between mt-3 footer-nav">
                <ul className="d-flex flex-md-row list-unstyled footer-nav-content">
                    <li className="nav-item fs-6 me-1 me-md-2">
                        <Link 
                            className="nav-link fw-semibold fs-6 fs-md-5"
                            to="home"
                            smooth={true}
                            offset={-240}
                            >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item mx-1 mx-md-2 fs-6">
                        <Link 
                            className="nav-link fw-semibold fs-6 fs-md-5"
                            to="about"
                            smooth={true}
                            offset={-240}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item mx-1 mx-md-2 fs-6">
                        <Link 
                            className="nav-link fw-semibold fs-6 fs-md-5"
                            to="skills"
                            smooth={true}
                            offset={-240}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className="nav-item mx-1 mx-md-2 fs-6">
                        <Link 
                            className="nav-link fw-semibold fs-6 fs-md-5"
                            to="projects"
                            smooth={true}
                            offset={-240}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item mx-1 mx-md-2 fs-6">
                        <Link 
                            className="nav-link fw-semibold fs-6 fs-md-5"
                            to="services"
                            smooth={true}
                            offset={-240}
                        >
                            Services
                        </Link>
                    </li>
                    <li className="nav-item mx-1 mx-md-2 fs-6">
                        <Link 
                            className="nav-link fw-semibold fs-6 fs-md-5"
                            to="contact"
                            smooth={true}
                            offset={-240}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="d-flex footer-social">
                <a 
                    href="https://www.instagram.com/nahu_t10/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body hover-primary text-decoration-none fw-bold fs-4"
                    >
                    <i className="mx-2 fs-4 icono-redes"><FontAwesomeIcon icon={faInstagram} /></i>
                </a>
                <a 
                    href="https://www.linkedin.com/in/nahuelteruel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body text-decoration-none fw-bold fs-4"
                    >
                    <i className="mx-2 fs-4 icono-redes"><FontAwesomeIcon icon={faLinkedinIn} /></i>
                </a>
                <a 
                    href="https://github.com/NahuelTeruel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body text-decoration-none fw-bold fs-4"
                    >
                    <i className="mx-2 fs-4 icono-redes"><FontAwesomeIcon icon={faGithub} /></i>
                </a>
                <a 
                    href="https://dribbble.com/Neo_Nahu07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body text-decoration-none fw-bold fs-4"
                    >
                    <i className="mx-2 fs-4 icono-redes"><FontAwesomeIcon icon={faBasketball} /></i>
                </a> 
                </div>
            </div>

            <div className='mt-5 text-center text-md-start'>
                <p className="fs-4 mb-1 fw-semibold question">Estas interesado en trabajar juntos <span className='text-primary'>?</span></p>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center bg-light">
                <div className="d-flex flex-md-row buttons mb-3 mb-md-0">
                    <Link
                        type="button"  
                        className="btn btn-primary fw-bold shadow-sm ms-0 ms-md-3 mt-3 mt-md-0"
                        to="contact" 
                        smooth={true} 
                        duration={500}
                        offset={-100}
                    >
                        Contactame
                    </Link>

                    <Link
                        type="button"  
                        className="btn btn-proyectos fw-bold shadow-sm ms-0 ms-md-3 mt-3 mt-md-0"
                        to="projects" 
                        smooth={true} 
                        duration={500}
                        offset={-100}
                    >
                        Buscar Proyectos
                    </Link>
                </div>

                <div className="text-body text-md-end mb-2 text-center">
                    <div>©2024 All Rights Reserved.</div>
                    <div>Made with 💜 by Nahuel Teruel</div>
                </div>
            </div>
        </footer>
    )
    }
export default Footer
