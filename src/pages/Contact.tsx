import './css/Contact.css'

const Contact = () => {
    return (
        <>
            <main className='contact-main'>
                <h1 className="page-title text-center">Contact Us</h1>
                <p className="page-desc">
                    It is a long established fact that a reader
                    will be distracted by the readable content
                    of a page when looking at its layout.
                </p>
                <form action="" className='contact-main-fm'>
                    <div className="input-bl d-f">
                        <div>
                            <label htmlFor="contactFName">First Name</label>
                            <input type="text" name='contactFName' id='contactFName' placeholder='First Name' />
                        </div>
                        <div>
                            <label htmlFor="contactLName">Last Name</label>
                            <input type="text" name='contactLName' id='contactLName' placeholder='Last Name' />
                        </div>
                    </div>
                    <div className="input-bl-huge">
                        <label htmlFor="contactEmail">Email</label>
                        <input type="email" name="contactEmail" id="contactEmail" placeholder='Email' />
                    </div>
                    <div className="input-bl-huge">
                        <label htmlFor="contactPhone">Phone Number</label>
                        <input type="email" name="contactPhone" id="contactPhone" placeholder='Phone Number' />
                    </div>
                    <div className="input-bl-huge input-bl-last">
                        <label htmlFor="contactMsg">Message</label>
                        <textarea name="contactMsg" id="contactMsg" placeholder='Your Message'></textarea>
                    </div>
                    <button type="button">Send Message</button>
                </form>
            </main>
            <section className='contact-location'>
                <h4 className="page-bl-above">Location</h4>
                <div className="contact-location-content d-f jc-sb">
                    <div>
                        <h2 className="page-bl-title">Visit Our Stores</h2>
                        <p className="contact-location-desc">Find us at these locations.</p>
                        <div style={{ marginTop: "39px" }}>
                            <h3 className="location-bl-title">Email</h3>
                            <p className="contact-location-desc" style={{ marginTop: "10px" }}>dananz@gmail.com</p>
                        </div>
                        <div style={{ marginTop: "33px" }}>
                            <h3 className="location-bl-title">Phone</h3>
                            <p className="contact-location-desc" style={{ marginTop: "10px" }}>+62 815 002 1000</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className="location-bl-title">Jakarta</h3>
                            <p className="contact-location-desc" style={{ marginTop: "30px" }}>
                                Customize your interior design into a dream place
                                with the best designers and quality furniture.
                                We try our best to fulfill your expectations.
                            </p>
                        </div>
                        <div style={{ marginTop: "41px" }}>
                            <h3 className="location-bl-title">Yogyakarta</h3>
                            <p className="contact-location-desc" style={{ marginTop: "30px" }}>
                                Customize your interior design into a dream place
                                with the best designers and quality furniture.
                                We try our best to fulfill your expectations.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className="location-bl-title">Surakarta</h3>
                            <p className="contact-location-desc" style={{ marginTop: "30px" }}>
                                Customize your interior design into a dream place
                                with the best designers and quality furniture.
                                We try our best to fulfill your expectations.
                            </p>
                        </div>
                        <div style={{ marginTop: "41px" }}>
                            <h3 className="location-bl-title">Bandung</h3>
                            <p className="contact-location-desc" style={{ marginTop: "21px" }}>
                                Customize your interior design into a dream place
                                with the best designers and quality furniture.
                                We try our best to fulfill your expectations.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact