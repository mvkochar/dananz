import './css/Services.css'

const Services = () => {
    return (
        <>
            <main className='services-main'>
                <h1 className="page-title text-center">Services</h1>
                <p className="page-desc">
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                </p>
                <div className="services-main-img"><img src="/images/services-main.png" alt="services-main" /></div>
            </main>
            <section className='services-achievement'>
                <h4 className="page-bl-above">Achievement</h4>
                <div className="services-achievement-box d-f">
                    <div className="services-achievement-item d-f align-center">
                        <div><img src="/images/services-achievement/1.png" alt="services-achievement1" /></div>
                        <div>
                            <h3 className="achievement-item-title">Interior design</h3>
                            <p className="achievement-item-desc">
                                Customize your interior design into a dream place
                                with the best designers and quality furniture.
                                We try our best to fulfill your expectations.
                            </p>
                        </div>
                    </div>
                    <div className="services-achievement-item d-f align-center">
                        <div><img src="/images/services-achievement/2.png" alt="services-achievement2" /></div>
                        <div>
                            <h3 className="achievement-item-title">Consultant</h3>
                            <p className="achievement-item-desc">
                                Customize your interior design into a dream place
                                with the best designers and quality furniture.
                                We try our best to fulfill your expectations.
                            </p>
                        </div>
                    </div>
                    <div className="services-achievement-item d-f align-center">
                        <div><img src="/images/services-achievement/3.png" alt="services-achievement3" /></div>
                        <div>
                            <h3 className="achievement-item-title">construction consultant</h3>
                            <p className="achievement-item-desc">
                                Customize your interior design into a dream place
                                with the best designers and quality furniture.
                                We try our best to fulfill your expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='services-product'>
                <div className="d-f jc-sb">
                    <div>
                        <h4 className="page-bl-above">Product</h4>
                        <h2 className="page-bl-title">Choose your <br /> product themes.</h2>
                    </div>
                    <p className="services-product-desc">
                        Find the theme you want. If our choice of theme
                        is not what you want, you can customize it as you want.
                    </p>
                </div>
                <div className="services-product-themes d-f">
                    <div className="d-f jc-sb">
                        <div className="themes-item-caption d-f">
                            <div>01</div>
                            <div>
                                <div>Vintage</div>
                                <p className="themes-item-desc">
                                    the use of simple and limited elements to get the best effect or impression.
                                </p>
                            </div>
                        </div>
                        <div><img src="/images/arrow-right.png" alt="arrow-right" /></div>
                    </div>
                    <div className="d-f jc-sb">
                        <div className="themes-item-caption d-f">
                            <div>02</div>
                            <div>
                                <div>Minimalist</div>
                                <p className="themes-item-desc">
                                    the use of simple and limited elements to get the best effect or impression.
                                </p>
                            </div>
                        </div>
                        <div><img src="/images/arrow-right.png" alt="arrow-right" /></div>
                    </div>
                    <div className="d-f jc-sb">
                        <div className="themes-item-caption d-f">
                            <div>03</div>
                            <div>
                                <div>Modern</div>
                                <p className="themes-item-desc">
                                    the use of simple and limited elements to get the best effect or impression.
                                </p>
                            </div>
                        </div>
                        <div><img src="/images/arrow-right.png" alt="arrow-right" /></div>
                    </div>
                    <div className="d-f jc-sb">
                        <div className="themes-item-caption d-f">
                            <div>04</div>
                            <div>
                                <div>transitional</div>
                                <p className="themes-item-desc">
                                    the use of simple and limited elements to get the best effect or impression.
                                </p>
                            </div>
                        </div>
                        <div><img src="/images/arrow-right.png" alt="arrow-right" /></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services