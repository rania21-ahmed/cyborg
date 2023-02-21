import './ClipsCard.css'
import {BsFillEyeFill} from "react-icons/bs"
const ClipsCard = (props) => {

  return (
    <div className='col-lg-3 col-sm-12'>
       
       <div className='clips-card  py-4 px-3 m-1'>
            <img src={props.imge} alt=".." className='img-clips w-100 ' />
            <div className='row clip-text pt-4'>
                <div className='col-sm-6 text-start'>{props.title}</div>
                <div className='col-sm-6 text-end'><span className="spaniconClip"><BsFillEyeFill/></span> {props.rate}</div>
            </div>
       </div>

    </div>
  )
}


export default ClipsCard
