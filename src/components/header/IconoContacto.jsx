import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './header.css';

function IconoContacto() {
    const dynamicContentRef = useRef(null);
    const rootRef = useRef(null);

    useEffect(() => {
        if (dynamicContentRef.current && !rootRef.current) {
            rootRef.current = ReactDOM.createRoot(dynamicContentRef.current);
        }

        const handleResize = () => {
            if (window.innerWidth < 992) {
                rootRef.current.render(
                    <a href='' className='nav-link mx-lg-2 fw-semibold contac-btn'>Contacto</a>
                );
            } else {
                rootRef.current.render(
                    <img src='/contact-img.png' className='img-contact' alt='Contacto' />
                );
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='mt-1'>
            <div id="dynamic-content" ref={dynamicContentRef}>
                <p className='nav-link mx-lg-2 fw-semibold'>Contacto</p>
            </div>
        </div>
    );
}

export default IconoContacto;


