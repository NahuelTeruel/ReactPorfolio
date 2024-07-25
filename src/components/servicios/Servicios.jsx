import { useEffect, useRef, useState } from 'react';
import './servicios.css';


const Servicios = () => {

    const services = [
        {
            id: 1,
            title: 'Diseñador Web',
            description: 'Mi objetivo es diseñar interfaces atractivas, intuitivas y sencillas. Trabajo en estrecha colaboración con desarrolladores para asegurar que los diseños se implementen correctamente.'
        },
        {
            id: 2,
            title: 'Desarrollo Frontend',
            description: 'Desarrollo frontend para crear interfaces de usuario atractivas y funcionales Utilizando tecnologías como HTML5, CSS3 y JavaScript, junto con librerias populares como React. Trabajo en equipo para convertir diseños en realidad, asegurando que cada detalle visual sea fiel al concepto original.'
        },
        {
            id: 3,
            title: 'Desarrollador Backend',
            description: 'Busco dar soluciones eficientes y escalables utilizando tecnologías como Node.js, y bases de datos como MongoDB y MySQL para garantizar que tu proyecto sea eficiente y seguro. Mi objetivo es asegurar que el backend de tu aplicación soporte el crecimiento y mantenga un rendimiento óptimo.'
        }
    ];


    const [servicesInView, setServicesInView] = useState([]);
    const serviceRefs = useRef([]);

    useEffect(() => {
        serviceRefs.current = serviceRefs.current.slice(0, services.length);

        const observers = serviceRefs.current.map((ref, index) => {
            return new IntersectionObserver(
                ([entry]) => {
                    setServicesInView(prev => {
                        const newInView = [...prev];
                        newInView[index] = entry.isIntersecting;
                        return newInView;
                    });
                },
                { threshold: 0.1 }
            );
        });

        serviceRefs.current.forEach((ref, index) => {
            if (ref) observers[index].observe(ref);
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);

    return (
        <section className="container services py-5 position-relative">
            <h2 className='fw-bold fs-1 text-secondary'> Servicios<span className='text-primary'>.</span></h2>
            {services.map((service, index) => (
                <div
                    key={service.id}
                    className={`service-item mt-5 mb-5 ${servicesInView[index] ? 'service-visible' : ''}`}
                    ref={el => (serviceRefs.current[index] = el)}
                >
                    <div className="number-line-container">
                        <div className="number text-secondary fs-1 fw-bold">
                            {service.id < 10 ? `0${service.id}` : service.id}
                        </div>
                        <div className={`line ${servicesInView[index] ? 'line-visible' : ''}`}></div>
                    </div>
                    <div>
                        <h3 className="text-primary fs-3 fw-bold">{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Servicios;