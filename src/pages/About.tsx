import './css/About.css'

const About = () => {
    return (
        <>
            <main className="about-main">
                <h1 className="page-title text-center">About</h1>
                <p className="page-desc">
                    It is a long established fact that a reader
                    will be distracted by the readable content
                    of a page when looking at its layout.
                </p>
                <div className="about-main-img"><img src="/images/about-main.png" alt="about-main" /></div>
            </main>
            <section className='about-achievement'>
                <h4 className="page-bl-above">Achievement</h4>
                <h2 className="page-bl-title">
                    interior customization with Danaanz, <br />
                    best quality with professional workers
                </h2>
                <div className="about-achievement-box d-f">
                    <div><img src="/images/about-achievement.png" alt="about-achievement" /></div>
                    <div className="about-achievement-stats d-f">
                        <dl>
                            <dt>350+</dt>
                            <dd>Project Completed</dd>
                        </dl>
                        <dl>
                            <dt>23+</dt>
                            <dd>Professional Teams</dd>
                        </dl>
                        <dl>
                            <dt>15+</dt>
                            <dd>Years Experience</dd>
                        </dl>
                    </div>
                </div>
            </section>
            <section className="about-service">
                <h4 className="page-bl-above">Service</h4>
                <h2 className="page-bl-title">Why Choose Us</h2>
                <p className="about-service-desc">
                    Customize your interior design into a dream place
                    with the best designers and quality furniture.
                    We try our best to fulfill your expectations.
                </p>
                <div className="about-service-box d-f">
                    <div className="about-service-item">
                        <div className="service-item-elipse"></div>
                        <h3 className="service-item-title">High Quality</h3>
                        <p className="service-item-desc">
                            Customize your interior design into a dream place 
                            with the best designers and quality furniture. 
                            We try our best to fulfill your expectations.
                        </p>
                    </div>
                    <div className="about-service-item">
                        <div className="service-item-elipse"></div>
                        <h3 className="service-item-title">Professional Designer</h3>
                        <p className="service-item-desc">
                            Customize your interior design into a dream place 
                            with the best designers and quality furniture. 
                            We try our best to fulfill your expectations.
                        </p>
                    </div>
                    <div className="about-service-item">
                        <div className="service-item-elipse"></div>
                        <h3 className="service-item-title">The Best Services</h3>
                        <p className="service-item-desc">
                            Customize your interior design into a dream place 
                            with the best designers and quality furniture. 
                            We try our best to fulfill your expectations.
                        </p>
                    </div>
                </div>
            </section>
        </>

    )
}

export default About