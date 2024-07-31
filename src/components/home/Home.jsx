import './home.css'
import {Link} from 'react-scroll';
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';


function Home() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);

    return (
    <section className="container" id="home">
        <div className="d-flex flex-column flex-md-row align-items-center">
            <div className="text-container" data-aos="fade-down">
                <p className="fs-4 text">Hola, Soy Nahuel 👋🏻</p>
                <h1 className="fw-bold text-secondary"> Full Stack</h1>
                <p className="fw-bold text-primary titulo" data-aos="fade-down"> Developer</p>
                <p className="fs-4 mt-5 text">Soy Full Stack developer y voy a ayudarte a generar páginas funcionales y atractivas para tu sitio web.</p>
                <Link
                    type="button"  
                    className="btn btn-primary mt-3 fw-bold shadow-sm"
                    to="contact" 
                    smooth={true} 
                    duration={500}
                    offset={-100}
                    >
                    Contactame
                </Link>

                <Link
                    type="button"  
                    className="btn btn-proyectos mt-3 ms-3 fw-bold shadow-sm"
                    to="projects" 
                    smooth={true} 
                    duration={500}
                    offset={-100}
                    >
                    Buscar Proyectos
                </Link>
            </div>
            <div className="image-container text-center" data-aos="fade-down">  
            <img 
                src="/foto-presentacion.jpg"
                className="img-thumbnail img-presentacion border-primary border-1 rounded-circle p-4 mr-5" 
                alt="foto-de-Nahuel"
                data-aos="fade-down"
            />
            </div>
        </div>
    </section>
    )
}

export default Home
