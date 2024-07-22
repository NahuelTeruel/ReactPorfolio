import './header.css'
import { useState } from 'react';

function Header() {
    
    const [esIcono, setIcono] = useState(true);

    function cambiarIconoTexto(){
        setIcono(!esIcono);
        return esIcono
    }

    return (
        <section className='container'>
            <nav className="navbar navbar-expand-lg justify-content-center fixed-top bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">NahuelT<span className="logo-destacado">.</span></a>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="offcanvas" 
                        data-bs-target="#offcanvasNavbar" 
                        aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation"
                        onClick={cambiarIconoTexto}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">NahuelT<span className="logo-destacado">.</span></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-4">
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2 fw-semibold active" aria-current="page" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2 fw-semibold" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2 fw-semibold" href="#Skills">Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2 fw-semibold" href="#Projects">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2 fw-semibold" href="#Services">Services</a>
                                </li>
                            </ul>
                            <button className="nav-link me-5 contact-btn" href="#Contact">
                                {esIcono? (<img src='../../../public/contact-img.png' className='img-contact'></img>) : 'Contacto'}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Header;
