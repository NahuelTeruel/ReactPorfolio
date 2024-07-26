function Skills() {

    return (
        <section className="container skills">
            <h2 className='fw-bold fs-1 text-secondary'> Habilidades<span className='text-primary'>.</span></h2>
            <div className="row row-cols-3 row-cols-md-2 g-3">
                <div className="col-md-3">
                    <div className="card card-no-border">
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li className="text-secondary fs-4 fw-bold">Diseño Web</li>
                                <li className="fs-5">UI/UX Design</li>
                                <li className="fs-5">Responsive Design</li>
                                <li className="fs-5">Wireframing</li>
                                <li className="fs-5">User Research</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card card-no-border">
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li className="text-secondary fs-4 fw-bold">Frontend</li>
                                <li className="fs-5">Javascript</li>
                                <li className="fs-5">ReactJS</li>
                                <li className="fs-5">NextJS</li>
                                <li className="fs-5">CSS3</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card card-no-border">
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li className="text-secondary fs-4 fw-bold">Backend</li>
                                <li className="fs-5">NodeJs</li>
                                <li className="fs-5">MondoDB</li>
                                <li className="fs-5">ExpressJS</li>
                                <li className="fs-5">Vercel</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card card-no-border">
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li className="text-secondary fs-4 fw-bold">Habilidades Blandas</li>
                                <li className="fs-5">Comunicación efectiva</li>
                                <li className="fs-5">Colaboración</li>
                                <li className="fs-5">Proactividad</li>
                                <li className="fs-5">Responsable</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills