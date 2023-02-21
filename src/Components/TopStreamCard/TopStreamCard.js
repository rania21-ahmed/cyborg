import './TopStreamCard.css'
import {BsCheckCircleFill} from "react-icons/bs"
import {StreamsButton} from '../index'

const TopStreamCard = (props) => {
  return (
    <div className='row py-1'>

        <div className='col-lg-1 col-sm-1 div-strem1'> 
            <span className='idNum'>0{props.n}</span> 
        </div>

        <div className='col-lg-3 col-sm-3 divImgStream div-strem2'> 
            <img src={props.imgIcon} alt="..." className='imgTopStream h-75'/>
        </div>

        <div className='col-lg-3 col-sm-3 div-strem3 align-self-center ofset-1 icon-text-topStream'>
          <div>
            <span className='iconBrows'><BsCheckCircleFill /> </span> 
            <span>{props.titleStream}</span> 
          </div>
          
        </div>

        <div className='col-lg-4 col-sm-4 text-end  btn-follow'>
            <StreamsButton > Follow </StreamsButton>
            
         </div>
        <hr/>
    </div>
  )
}

export default TopStreamCard
