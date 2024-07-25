import './header.css'
import IconoContacto from './IconoContacto';
import { useState} from 'react';
import { Link} from 'react-scroll';

function Header() {

    const duracion = 500;

    const [seccionActiva, setSeccionActiva] = useState('');

    const cambiarSeccionActiva = (to) => {
        console.log('Cambiando a sección:', to); 
        setSeccionActiva(to);
    };

    console.log('Sección Activa:', seccionActiva);

    return (
        <section className='container'>
            <nav className="navbar navbar-expand-lg justify-content-center fixed-top bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">NahuelT<span className="logo-destacado">.</span></a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-secondary" id="offcanvasNavbarLabel">NahuelT<span className="logo-destacado">.</span></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-4">
                                <li className="nav-item">
                                    <Link 
                                        className={`nav-link mx-lg-2 fw-semibold ${seccionActiva === 'home' ? console.log('funciona') : ''}`}
                                        to="home" 
                                        smooth={true} 
                                        duration={duracion}
                                        offset={-240}
                                        onSetActive={() => {
                                            console.log('Sección activa:', 'home');
                                            cambiarSeccionActiva('home');}}
                                        >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        className={`nav-link mx-lg-2 fw-semibold ${seccionActiva === 'about' ? 'active-link' : ''}`}
                                        to="about" 
                                        smooth={true} 
                                        duration={duracion}
                                        offset={-180}
                                        onSetActive={() => cambiarSeccionActiva('about')}
                                        >
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        className={`nav-link mx-lg-2 fw-semibold ${seccionActiva === 'skills' ? 'active-link' : ''}`}
                                        to="skills" 
                                        smooth={true} 
                                        duration={duracion}
                                        offset={-280}
                                        onSetActive={() => cambiarSeccionActiva('skills')}
                                        >
                                        Skills
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        className={`nav-link mx-lg-2 fw-semibold ${seccionActiva === 'projects' ? 'active-link' : ''}`}
                                        to="projects" smooth={true} 
                                        duration={500}
                                        offset={-100}
                                        onSetActive={() => cambiarSeccionActiva('projects')}
                                        >Projects
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        className={`nav-link mx-lg-2 fw-semibold ${seccionActiva === 'services' ? 'active-link' : ''}`}
                                        to="services" 
                                        smooth={true} 
                                        duration={500}
                                        offset={-140}
                                        onSetActive={() => cambiarSeccionActiva('services')}
                                        >
                                        Services
                                    </Link>
                                </li>
                            </ul>
                            <Link 
                                        className={`nav-link mx-lg-2 fw-semibold ${seccionActiva === 'contact' ? 'active-link' : ''}`}
                                        to="contact" 
                                        smooth={true} 
                                        duration={500}
                                        offset={-100}
                                        onSetActive={() => cambiarSeccionActiva('contact')}
                                        >
                                        <IconoContacto/>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Header;
