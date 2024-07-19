import './header.css'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg justify-content-center fixed-top">
    <div className="container-fluid">
        <a className="navbar-brand ms-5" href="#">NahuelT<span className="logo-destacado">.</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">NahuelT<span className="logo-destacado">.</span></h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-5">
            <li className="nav-item">
                <a className="nav-link mx-lg-2 active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link mx-lg-2" href="#About">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link mx-lg-2" href="#Skills">Skills</a>
            </li>
            <li className="nav-item">
                <a className="nav-link mx-lg-2" href="#Projects">Projects</a>
            </li>
            <li className="nav-item">
                <a className="nav-link mx-lg-2" href="#Services">Services</a>
            </li>
            {/* <li className="nav-item">
                <a className="nav-link mx-lg-2" href="#Services">Contacto</a>
            </li> */}
            </ul>
            <button className="nav-link me-5 contact-btn" href="#Contact"><img src='../../../public/contact-img.png' className='img-contact'></img></button>
        </div>
        </div>
    </div>
    </nav>
  );
}

export default Header;
