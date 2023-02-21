import './Card.css'
import { FaStar ,FaDownload} from "react-icons/fa"
const Card=(props)=>{
    return(
        <>
            <div className='div-card col-lg-3 col-sm-6 p-0 '>
                <div className='card-wrapper m-2'>
                    <img className='most-popular-item-imge ' src={props.imge} alt="most_populer_home"/>
                    <div className='most-popular-item-content'>
                        <h4 className='most-popular-item-title'>
                        {props.title} <br />
                            <span className='span-primary'>{props.category}</span>
                        </h4>
                        <ul>
                            <li><span style={{"color":"yellow"}}><FaStar/> </span><span>{props.rate}</span></li>
                            <li> <span style={{ "color":"var(--color-primary)"}}><FaDownload/> </span><span>{props.download}</span></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Card