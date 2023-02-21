import './MPLiveStreamCard.css'
import { FaRegGrinBeam ,FaGamepad} from "react-icons/fa";
import {BiShow} from "react-icons/bi";

const MPLiveStream = (props) => {
  return (
    <div className="col-lg-3 col-sm-12 live-stremer-div">

      <div className=""> 
        <div className='contain-mp'>
          <img src={props.imgeHeader} alt='...' className='w-100 img-header-browse'/>
          <div className='overlay-mp '>
            <span className='span_Live'>Live</span>
            <span className='span_icon1 '><BiShow/> 1.2K</span>
            <span className='span_icon'><FaGamepad /> CS-GO</span>

          </div>
        </div>
        
        <div className="row">
          <div className='col-lg-2 col-sm-2 '>  
            <img src={props.imgIcon} alt="..." className='mt-3 rounded-circle' />
          </div>
          <div className='col-lg-10 col-sm-10 '>  
            <span className='icon-live-browse'><FaRegGrinBeam/> </span>
            <span className='title-live-browse'> {props.title}</span>
            <h4 className='header-live-stream py-3'>{props.header}</h4>
          </div>
        </div>

      </div>

    </div>
  )
}

export default MPLiveStream

