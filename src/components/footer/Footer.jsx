import { Link} from 'react-scroll';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBasketball} from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'

function Footer() {

    return (
        <footer className='container mb-4'>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <ul className="d-flex list-unstyled mb-0">
                    <li className="nav-item fs-5 me-2">
                        <Link 
                            className="nav-link fw-semibold"
                            to="home"
                            smooth={true}
                            offset={-240}
                            >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item mx-2 fs-5">
                        <Link 
                            className="nav-link fw-semibold"
                            to="about"
                            smooth={true}
                            offset={-240}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item mx-2 fs-5">
                        <Link 
                            className="nav-link fw-semibold"
                            to="skills"
                            smooth={true}
                            offset={-240}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className="nav-item mx-2 fs-5">
                        <Link 
                            className="nav-link fw-semibold"
                            to="projects"
                            smooth={true}
                            offset={-240}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item mx-2 fs-5">
                        <Link 
                            className="nav-link fw-semibold"
                            to="services"
                            smooth={true}
                            offset={-240}
                        >
                            Services
                        </Link>
                    </li>
                    <li className="nav-item mx-2 fs-5">
                        <Link 
                            className="nav-link fw-semibold"
                            to="contact"
                            smooth={true}
                            offset={-240}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="d-flex">
                    <i className="mx-2 fs-4"><FontAwesomeIcon icon={faInstagram} /></i>
                    <i className="mx-2 fs-4"><FontAwesomeIcon icon={faLinkedinIn} /></i>
                    <i className="mx-2 fs-4"><FontAwesomeIcon icon={faGithub} /></i>
                    <i className="mx-2 fs-4"><FontAwesomeIcon icon={faBasketball} /></i>
                </div>
            </div>

            <div className='mt-5'>
                <p className="fs-4 mb-1 fw-semibold">Estas interesado en trabajar juntos <span className='text-primary'>?</span></p>
            </div>
            <div className="d-flex justify-content-between align-items-center p-3 bg-light">
                <div className="d-flex">
                    <Link
                        type="button"  
                        className="btn btn-primary fw-bold shadow-sm"
                        to="contact" 
                        smooth={true} 
                        duration={500}
                        offset={-100}
                    >
                        Contactame
                    </Link>

                    <Link
                        type="button"  
                        className="btn btn-proyectos ms-3 fw-bold shadow-sm"
                        to="projects" 
                        smooth={true} 
                        duration={500}
                        offset={-100}
                    >
                        Buscar Proyectos
                    </Link>
                </div>

                <div className="text-body text-end mb-2">
                    <div>©2024 All Rights Reserved.</div>
                    <div>Made with 💜 by Nahuel Teruel</div>
                </div>
            </div>
        </footer>
    )
    }
export default Footer
