import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './header.css';

function IconoContacto() {
    const dynamicContentRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
        if (dynamicContentRef.current) {
            const root = ReactDOM.createRoot(dynamicContentRef.current);
            if (window.innerWidth < 992) {
                root.render(
                <a href='' className='nav-link mx-lg-2 fw-semibold contac-btn'>Contacto</a>
            );
            } else {
                root.render(
                <img src='../../../public/contact-img.png' className='img-contact' alt='Contacto' />
            );
            }
        }
    };

    // Configura el evento de redimensionamiento
    window.addEventListener('resize', handleResize);

    // Ejecuta la función una vez al montar el componente
    handleResize();

    // Limpia el evento cuando el componente se desmonte
    return () => {
        window.removeEventListener('resize', handleResize);
    };
    }, []);

    return (
        <div className='mt-1'>
            <div id="dynamic-content" ref={dynamicContentRef}>
                {/* El contenido inicial puede ser el ícono o el texto según el tamaño de la pantalla */}
                <p href='' className='nav-link mx-lg-2 fw-semibold'>Contacto</p>
            </div>
        </div>
    );
}

export default IconoContacto

