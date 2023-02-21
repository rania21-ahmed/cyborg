import './hero.css'
import {PrimaryButton} from '../../Components/index'
const Hero=()=>{
    return(
        <div>
            <div className='hero-main'>
                <div className='hero-text'>
                    <h6 className="hero-subtitle">Welcome To Cyborg </h6>
                    <h4 className="hero-title"><em>BROWSE</em> OUR POPULAR GAMES HERE </h4>

                    <PrimaryButton>Browse Now</PrimaryButton>
                    
                </div>
            </div>
        </div>
    )
}

export default Hero;