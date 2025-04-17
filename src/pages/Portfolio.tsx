import { Link } from 'react-router-dom'
import './css/Portfolio.css'

const Portfolio = () => {
    return (
        <>
            <main className='portfolio-main'>
                <h1 className="page-title text-center">Portofolio</h1>
                <p className="page-desc">
                    It is a long established fact that a reader
                    will be distracted by the readable content
                    of a page when looking at its layout.
                </p>
                <div className="portfolio-main-img">
                    <img src="/images/portfolio-main.png" alt="portfolio-main" />
                </div>
            </main>
            <section className='portfolio-info d-f portfolio-info-first'>
                <div><img src="/images/portfolio-info1.png" alt="portfolio-info1" /></div>
                <div>
                    <div className="portfolio-info-author d-f align-center">
                        <div><img src="/images/home-about-author.png" alt="portfolio-info-author" /></div>
                        <div>
                            <h3 className="author-name">Arga Danaan</h3>
                            <p className="author-pos">CEO of Dananz</p>
                        </div>
                    </div>
                    <h2 className='portfolio-info-title'>Minimalist Room</h2>
                    <p className="portfolio-info-desc">
                        Online learning with us does not interfere with your daily life.
                        Because learning can be done anytime and anywhere.
                    </p>
                    <Link to="/portfolio-details" className="portfolio-info-more">See More</Link>
                </div>

            </section>
            <section className='portfolio-info d-f portfolio-info-second'>
                <div>
                    <div className="portfolio-info-author d-f align-center">
                        <div><img src="/images/home-about-author.png" alt="portfolio-info-author" /></div>
                        <div>
                            <h3 className="author-name">Arga Danaan</h3>
                            <p className="author-pos">CEO of Dananz</p>
                        </div>
                    </div>
                    <h2 className='portfolio-info-title'>Vintage Room</h2>
                    <p className="portfolio-info-desc">
                        Online learning with us does not interfere with your daily life.
                        Because learning can be done anytime and anywhere.
                    </p>
                    <a href="" className="portfolio-info-more">See More</a>
                </div>
                <div><img src="/images/portfolio-info2.png" alt="portfolio-info2" /></div>
            </section>
            <section className='portfolio-info d-f portfolio-info-third'>
                <div><img src="/images/portfolio-info3.png" alt="portfolio-info3" /></div>
                <div>
                    <div className="portfolio-info-author d-f align-center">
                        <div><img src="/images/home-about-author.png" alt="portfolio-info-author" /></div>
                        <div>
                            <h3 className="author-name">Arga Danaan</h3>
                            <p className="author-pos">CEO of Dananz</p>
                        </div>
                    </div>
                    <h2 className='portfolio-info-title'>Modern Room</h2>
                    <p className="portfolio-info-desc">
                        Online learning with us does not interfere with your daily life.
                        Because learning can be done anytime and anywhere.
                    </p>
                    <a href="" className="portfolio-info-more">See More</a>
                </div>

            </section>
            <section className='portfolio-info d-f portfolio-info-fourth'>
                <div>
                    <div className="portfolio-info-author d-f align-center">
                        <div><img src="/images/home-about-author.png" alt="portfolio-info-author" /></div>
                        <div>
                            <h3 className="author-name">Arga Danaan</h3>
                            <p className="author-pos">CEO of Dananz</p>
                        </div>
                    </div>
                    <h2 className='portfolio-info-title'>Transitional Room</h2>
                    <p className="portfolio-info-desc">
                        Online learning with us does not interfere with your daily life.
                        Because learning can be done anytime and anywhere.
                    </p>
                    <a href="" className="portfolio-info-more">See More</a>
                </div>
                <div><img src="/images/portfolio-info4.png" alt="portfolio-info4" /></div>
            </section>
            <section className="portfolio-service">
                <h4 className="page-bl-above">Service</h4>
                <h2 className="page-bl-title">Why Choose Us</h2>
                <p className="portfolio-service-desc">
                    Customize your interior design into a dream place
                    with the best designers and quality furniture.
                    We try our best to fulfill your expectations.
                </p>
                <div className="portfolio-service-box d-f">
                    <div className="portfolio-service-item">
                        <div className="service-item-elipse"></div>
                        <h3 className="service-item-title">High Quality</h3>
                        <p className="service-item-desc">
                            Customize your interior design into a dream place
                            with the best designers and quality furniture.
                            We try our best to fulfill your expectations.
                        </p>
                    </div>
                    <div className="portfolio-service-item">
                        <div className="service-item-elipse"></div>
                        <h3 className="service-item-title">Professional Designer</h3>
                        <p className="service-item-desc">
                            Customize your interior design into a dream place
                            with the best designers and quality furniture.
                            We try our best to fulfill your expectations.
                        </p>
                    </div>
                    <div className="portfolio-service-item">
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

export default Portfolio