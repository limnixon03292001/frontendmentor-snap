import './Hero.css';
import imgHeroDesktop from '../../assets/image-hero-desktop.png';
import imgHeroMobile from '../../assets/image-hero-mobile.png';
import dataBiz from '../../assets/client-databiz.svg';
import audioPhile from '../../assets/client-audiophile.svg';
import meet from '../../assets/client-meet.svg';
import maker from '../../assets/client-maker.svg';

export default function Hero() {
  return (
    <div style={{marginTop: '1rem'}}>
      <div className="hero-wrapper">
        <div className="hero-details-wrapper">
          <div>
            <h1 className="hero-header">
              Make remote work
            </h1>
            <br />
            <p className="hero-description" >Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <br />
            <button className='hero-btn'>
              Learn more
            </button>
          </div>

          <div className="brands"> 
            <img src={dataBiz}/>
            <img src={audioPhile}/>
            <img src={meet}/>
            <img src={maker}/>  
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img src={imgHeroDesktop} alt="hero-image"
          className="hero-image-desktop"/>

          <img src={imgHeroMobile} alt="hero-image"
          className="hero-image-mobile"/>
        </div>
      
      </div>
    </div>
  );
}
