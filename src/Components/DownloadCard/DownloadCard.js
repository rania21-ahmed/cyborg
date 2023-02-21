import './DownloadCard.css'

import { FaStar ,FaDownload} from "react-icons/fa"

const DownloadCard = (props) => {
  return (
    <>
        <div className='row py-3'>
            <div className='col-lg-3 col-sm-3 card-download-browse-img'>
                <img src={props.imge} alt="" className="img-download "/>
                
            </div>
            <div className='col-lg-5 col-sm-5 download card-download-browse-center'>
                    
                    <span className='span-title'>{props.title}</span> 
                    <span className='span-primary'>{props.category}</span><br/>
                    <span className='icon-d' style={{ "color":"yellow"}}><FaStar/> </span>
                    <span className='icon-d' style={{"color":"var(--color-primary)"}}><FaDownload/> </span>
            </div>
            <div className='col-lg-3 col-sm-3 offset-1 align-self-center card-download-browse-icon'>
                <span className='icon-right-d'><FaDownload/></span>
                
            </div>
        </div>
        <hr/>
    </>
  )
}


export default DownloadCard
