import './home.css'

function Home() {

    return (
    <section className="container home align-items-center">
        <div className="d-flex">
            <div>
                <p className="fs-4 text">Hola, Soy Nahuel 👋🏻</p>
                <h1 className="fw-bold text-secondary"> Full Stack</h1>
                <p className="fw-bold text-primary titulo"> Developer</p>
                <p className="fs-4 mt-5 text">Soy Full Stack developer y voy a ayudarte a generar páginas funcionales y atractivas para tu sitio web.</p>
                <a 
                    type="button" 
                    className="btn btn-primary mt-3 fw-bold shadow-sm"
                    href="contacto"
                >
                    Contactame
                </a>
                <a
                    type="button" 
                    className="btn btn-proyectos mt-3 ms-3 fw-bold shadow-sm"
                    href="#projects"
                >
                    Buscar Proyectos
                </a>
            </div>
            <img 
                src="../../../public/foto-presentacion.jpg"
                className="img-thumbnail img-presentacion border-primary border-1 rounded-circle p-4 mr-5" 
                alt="foto-de-Nahuel"
            />
        </div>
    </section>
    )
}

export default Home
