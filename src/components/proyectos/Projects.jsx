import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleArrowUp} from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import './projects.css'
import AOS from 'aos'
import 'aos/dist/aos.css';


function Projects() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);

    const projectData = [
        {
            imgSrc: '/proyecto-api-rick-and-morty.png',
            title: 'Conexión API - The Rick and Morty',
            description: 'Página que muestra los personajes de la serie animada, gracias a la conexión con la API.',
            url: 'https://rick-morty-api-conection.netlify.app/',
        },
        {
            imgSrc: '/portfolio.png',
            title: 'Portfolio',
            description: 'Portafolio realizado simplemente utilizando html y css con diseño responsivo, buscando replicar un diseño previamente seleccionado.',
            url: 'https://nahuelteruel.github.io/PagePortfolio/',
        },
        {
            imgSrc: '',
            title: 'EventPlanner',
            description: 'Aplicación web de planificación de eventos que permite a los usuarios organizar y gestionar eventos sin esfuerzo.',
            url: '',
        },
        {
            imgSrc: '',
            title: 'FoodieFinder',
            description: 'Plataforma de descubrimiento de restaurantes de aspecto moderno que ofrece búsqueda, reseñas y calificaciones en tiempo real.',
            url: '',
        },
    ];

    return (
        <section className="container projects">
            <h2 className="fw-bold fs-1 text-secondary mb-5" data-aos="fade-down"> Proyectos<span className="text-primary">.</span></h2>
            <div className="row g-4" data-aos="fade-down">
                {projectData.map((project, index) => (
                    <div className={`col-md-${index % 4 === 0 || index % 4 === 3 ? '7' : '5'}`} key={index}>
                        <div className="card h-100">
                            <img src={project.imgSrc} className="card-img-top img-projects" alt={project.title} />
                            <div className="card-body">
                                <div className="card-title mt-3 titulo-project" data-aos="fade-down">
                                    <a 
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-secondary text-decoration-none fw-bold fs-4"
                                        >
                                        {project.title}
                                    </a>
                                    <i className='text-primary ms-2 fs-4' ><FontAwesomeIcon icon={faCircleArrowUp} className='icono-arrow'/></i>
                                </div>
                                <p className="card-text" data-aos="fade-down">{project.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;