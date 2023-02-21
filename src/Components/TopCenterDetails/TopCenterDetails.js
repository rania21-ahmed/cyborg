import './TopCenterDetails.css'
import { FaStar ,FaDownload,FaHive,FaBookDead} from "react-icons/fa"
const TopCenterDetails = () => {
  return (
    <div className='top-center-details row'>
        <div className='col-lg-6 col-sm-12 top-center-details-icon test'>
            
            <div className='center-details-item-content icon-right'>
                <h4 className='center-details-item-title'>
                Fortnite <br /> <span className="span-primary">Sandbox</span>
                </h4>
                <ul className='ul-icon'>
                    <li><span style={{"color":"yellow"}}><FaStar/> </span><span>364</span></li>
                    <li> <span style={{"color":"var(--color-primary)"}}><FaDownload/> </span><span>e4</span></li>
                </ul>
            </div>
        </div>

        <div className='col-lg-6 col-sm-12 top-center-details-icon'>

            <div className='top-center-details-icon-left '>
                    <ul className='row icon-left'>
                        <li className='col-3'><span style={{"color":"yellow"}}><FaStar/><br/> </span><span>4.7</span></li>
                        <li className='col-3'> <span style={{"color":"var(--color-primary)"}}><FaDownload/> <br/></span><span>2.8M</span></li>
                        <li className='col-3'><span style={{"color":"var(--color-primary)"}}><FaHive/><br/> </span><span>36GB</span></li>
                        <li className='col-3'><span style={{"color":"var(--color-primary)"}}><FaBookDead/><br/> </span><span>Action</span></li>
                        
                    </ul>
            </div>
                    
        </div>

    </div>
  )
}

export default TopCenterDetails
