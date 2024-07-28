import './aboutMe.css'
import Mapa from '../mapa/Mapa'
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';

function AboutMe() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);

    return (
        <section className="container about">
            <h2 className='fw-bold fs-1 text-secondary' data-aos="fade-down">Sobre mí <span className='text-primary'>.</span></h2>
            <p className='side-line mt-4 mb-5' data-aos="fade-down">Lo que más me emociona de ser un programador full stack es la capacidad de trabajar en todos los aspectos de un proyecto, desde la concepción inicial hasta el despliegue final. Disfruto colaborando con equipos multidisciplinarios, compartiendo ideas y aprendiendo de mis compañeros para crear productos que impacten positivamente en la vida de las personas. Fuera el mundo del desarrollo, disfruto pasar tiempo al aire libre, practicar deportes y explorar nuevas culturas a través de la comida y los viajes. Estoy emocionado por la oportunidad de colaborar en nuevos proyectos y contribuir con mi experiencia y pasión por la programación. ¡Espero poder conectar contigo y trabajar juntos para hacer realidad grandes ideas!</p>
            <div className="row row-cols-2 row-cols-md-2 g-5" data-aos="fade-down">
                <div className="col-md-5">
                    <div className="card card-no-border">
                        <div className="card-body">
                            <h5 className="card-title fs-4 text-secondary fw-bold">Mi pila.</h5>
                            <img src="/skills-about.png" className="card-img-top img-skills" alt="..."/>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="card card-no-border">
                        <div className="card-body">
                            <h5 className="card-title text-secondary fs-4 fw-bold">Mi lugar especial.</h5>
                            <Mapa/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;