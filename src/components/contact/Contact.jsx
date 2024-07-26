import './contact.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {

    const whatsappMessage = encodeURIComponent("Hola, me contacto contigo para ofrecerte una oportunidad laboral!");

    return (
        <div className="container contact mt-5">
            <div className="row">
                <div className="col-md-6">
                <h2 className='fw-bold fs-1 text-secondary'> Contacto<span className='text-primary'>.</span></h2>
                    <p className="mb-4">¿Buscas que trabajemos juntos? Comuníquese a través del formulario y me comunicaré con usted en las próximas 48 horas.</p>
                    <div className='mt-3 container-icono'>
                        <i className='icono-contacto'><FontAwesomeIcon icon={faEnvelope}/></i>
                        <a href="mailto:teruelnahuel10@gmail.com" className='ms-2 text-decoration-none enlace'> teruelnahuel10@gmail.com</a>
                    </div>
                    <div className='mt-3 container-icono'>
                        <i className='icono-contacto'><FontAwesomeIcon icon={faPhone}/></i>
                        <a href="tel:+543512890754" className='ms-2 text-decoration-none enlace'> +54 351 289 0754</a>
                    </div>
                    <div className='mt-3 container-icono'>
                        <i className='icono-contacto'><FontAwesomeIcon icon={faWhatsapp}/></i>
                        <a href={`https://web.whatsapp.com/send?phone=5493512890754&text=${whatsappMessage}`} target='_blank' className='ms-2 text-decoration-none enlace'>+54 351 289 0754</a>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <img 
                        src="../../../public/foto-presentacion.jpg"
                        className="img-thumbnail img-contacto border-primary border-1 rounded-circle p-4 mr-5" 
                        alt="foto-de-Nahuel"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;

