import './css/PortfolioDetails.css'

const PortfolioDetails = () => {
    return (
        <>
            <main className='details-main'>
                <h1 className="page-title text-center">Minimalist Room</h1>
                <p className="page-desc">
                    It is a long established fact that
                    a reader will be distracted by the
                    readable content of a page when looking at its layout.
                </p>
                <div className="details-main-img"><img src="/images/details-main.png" alt="details-main" /></div>
            </main>
            <section className='details-info d-f'>
                <div>
                    <h3 className="details-info-title">Project Overview</h3>
                    <p className="details-info-desc">
                        Online learning with us does not interfere with your daily life.
                        because learning can be done anytime and anywhere. Online learning
                        with us does not interfere with your daily life. because learning
                        can be done anytime and anywhere. Online learning with us does not
                        interfere with your daily life. because learning can be done anytime
                        and anywhere.
                    </p>
                    <div className="details-info-about d-f">
                        <p>July 22 - 2022</p>
                        <p>Interior Design - Furnitur</p>
                    </div>
                </div>
                <div>
                    <h3 className="details-info-title">Design Process</h3>
                    <p className="details-info-desc">
                        Online learning with us does not interfere with your daily life.
                        Because learning can be done anytime and anywhere.
                        Online learning with us does not interfere with your daily life.
                        Because learning can be done anytime and anywhere.
                    </p>
                    <p className="details-info-desc info-desc__last">
                        Online learning with us does not interfere with your daily life.
                        because learning can be done anytime and anywhere.
                        Online learning with us does not interfere with your daily life.
                        because learning can be done anytime and anywhere.
                    </p>
                </div>
            </section>
            <div className="details-pictures d-f">
                {
                    [1, 2, 3, 4, 5].map((num) => {
                        return (
                            <div key={`details-pic${num}`}>
                                <img src={`/images/details-pic${num}.png`} alt={`details-pic${num}`} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default PortfolioDetails