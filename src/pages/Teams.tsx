import './css/Teams.css'

const Teams = () => {
    return (
        <>
            <main className='teams-main'>
                <h1 className="page-title text-center">Our Teams</h1>
                <p className="page-desc">
                    It is a long established fact that a reader
                    will be distracted by the readable content
                    of a page when looking at its layout.
                </p>
                <div className="teams-main-img">
                    <img src="/images/teams-main.png" alt="teams-main" />
                </div>
            </main>
            <section className='teams-designer'>
                <h4 className="page-bl-above">Designer</h4>
                <h2 className="page-bl-title">Creative Person</h2>
                <p className="teams-designer-desc">
                    Customize your interior design into a dream place
                    with the best designers and quality furniture.
                    We try our best to fulfill your expectations.
                </p>
                <div className="teams-designer-box d-f">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8].map((member) => {
                            return (
                                <div className="teams-designer-item" key={`team-member${member}`}>
                                    <div className="designer-item-info">
                                        <h3 className="designer-item-name">Shoo Phar Dhie</h3>
                                        <p className="designer-item-pos">Ceo</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className="teams-service">
                <h4 className="page-bl-above">Service</h4>
                <h2 className="page-bl-title">Why Choose Us</h2>
                <p className="teams-service-desc">
                    Customize your interior design into a dream place
                    with the best designers and quality furniture.
                    We try our best to fulfill your expectations.
                </p>
                <div className="teams-service-box d-f">
                    <div className="teams-service-item">
                        <div className="service-item-elipse"></div>
                        <h3 className="service-item-title">High Quality</h3>
                        <p className="service-item-desc">
                            Customize your interior design into a dream place 
                            with the best designers and quality furniture. 
                            We try our best to fulfill your expectations.
                        </p>
                    </div>
                    <div className="teams-service-item">
                        <div className="service-item-elipse"></div>
                        <h3 className="service-item-title">Professional Designer</h3>
                        <p className="service-item-desc">
                            Customize your interior design into a dream place 
                            with the best designers and quality furniture. 
                            We try our best to fulfill your expectations.
                        </p>
                    </div>
                    <div className="teams-service-item">
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

export default Teams