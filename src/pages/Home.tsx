import './css/Home.css'

const Home = () => {
  return (
    <>
      <main className='home-main'>
        <div className="home-main-caption d-f">
          <h1 className="home-main-title">Design your interor with high quality.</h1>
          <div className="caption-line"></div>
        </div>
        <div><img src="/images/home-main.png" alt="home-main" /></div>
        <div className="home-main-stats d-f">
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
        <p className="home-main-copyright">2022 <br /> All right reserved</p>
      </main>
      <section className='home-about'>
        <h4 className="page-bl-above">About</h4>
        <h2 className="page-bl-title">
          “We're one of the best furniture agency. Prioritizing customers
          and making purchases easy are the hallmarks of our agency.”
        </h2>
        <div className="home-about-box d-f">
          <div><img src="/images/home-about.png" alt="home-about" /></div>
          <div>
            <div className="home-about-author d-f align-center">
              <div><img src="/images/home-about-author.png" alt="home-about-author" /></div>
              <div>
                <p className="author-name">Arga Danaan</p>
                <p className="author-pos">CEO of Dananz</p>
              </div>
            </div>
            <p className="home-about-desc">
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere.
            </p>
            <a href="" className="home-about-more">Learn more</a>
          </div>
        </div>
      </section>
      <section className='home-service'>
        <h4 className="page-bl-above">Service</h4>
        <h2 className="page-bl-title">attractive furniture with the best quality.</h2>
        <p className="home-service-desc">
          Customize your interior design into a dream place with the best designers
          and quality furniture. We try our best to fulfill your expectations.
        </p>
        <div className="pos-r" style={{ height: "632px" }}>
          <div className="home-service-options d-f">
            <div className="d-f jc-sb">
              <div className="options-caption d-f">
                <div>01</div>
                <div>Interior Design</div>
              </div>
              <div><img src="/images/arrow-right.png" alt="arrow-righnt" /></div>
            </div>
            <div className="d-f jc-sb">
              <div className="options-caption d-f">
                <div>02</div>
                <div>Consultant</div>
              </div>
              <div><img src="/images/arrow-right.png" alt="arrow-righnt" /></div>
            </div>
            <div className="d-f jc-sb">
              <div className="options-caption d-f">
                <div>03</div>
                <div>Construction Consultant</div>
              </div>
              <div><img src="/images/arrow-right.png" alt="arrow-righnt" /></div>
            </div>
          </div>
          <div className="home-service-img">
            <img src="/images/home-service.png" alt="home-service" />
          </div>
        </div>
      </section>
      <section className='home-product'>
        <div className="d-f jc-sb">
          <div>
            <h4 className="page-bl-above">Product</h4>
            <h2 className="page-bl-title">Choose your <br /> product themes.</h2>
          </div>
          <p className="home-product-desc">
            Find the theme you want. If our choice of theme
            is not what you want, you can customize it as you want.
          </p>
        </div>
        <div className="home-product-themes d-f">
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
      <section className='home-materials d-f'>
        <div>
          <h4 className="page-bl-above">Material</h4>
          <h2 className="page-bl-title">choice of <br /> materials for <br /> quality furniture.</h2>
          <p className="home-materials-desc">
            You can custom the material as desired. And our furniture uses 
            the best materials and selected quality materials.
          </p>
          <a href="" className="home-materials-see">See Materials</a>
        </div>
        <div><img src="/images/home-materials.png" alt="home-materials" /></div>

      </section>
    </>
  )
}

export default Home