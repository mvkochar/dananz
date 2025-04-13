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
    </>
  )
}

export default Home