import './FeatureGameCard.css'

import { FaStar ,FaDownload} from "react-icons/fa"

const FeatureGameCard = (props) => {
  return (

    <div className='card-feature row'>
       
       <div className='contain'>
          <img src={props.imge} alt="feature" className='img-feature col-lg-4 col-sm-12' />
         
          <div className='overlay '>
            <p className='text-overlay'>2.4K_Download</p>
          </div>
       </div>
       

        <div className='most-popular-item-content col-lg-12 col-sm-12'>
          <h4 className='most-popular-item-title'>
          {props.title} <br />
              <span className='span-primary'>{props.category}</span>
          </h4>
          <ul>
              <li><span style={{"color":"yellow"}}><FaStar/> </span><span>{props.rate}</span></li>
              <li> <span style={{"color":"var(--color-primary)"}}><FaDownload/> </span><span>{props.download}</span></li>
              
          </ul>
        </div>
       
        
    </div>



  )
}

export default FeatureGameCard
