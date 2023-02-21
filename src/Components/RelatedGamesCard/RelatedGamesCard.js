import './RelatedGamesCard.css'
import { FaStar ,FaDownload} from "react-icons/fa"

const RelatedGamesCard = (props) => {
  return (
    <div className='related-game-card '>
        <div className='row'>

            <div className='col-lg-3 col-sm-4 my-2 align-self-center div-img-relate div-rate'>
                
                
                        <img src={props.imge} className="col-lg-6  img-related-card"/>
                        {/* <h4 className="col-lg-6 text-start align-self-center">{props.title} <br /><span className='span-primary'>{props.category}</span> </h4> */}
             
            </div>

            <div className='col-lg-4 col-sm-6 align-self-center text-start icon-relate div-rate'>
                <h4>{props.title} <br /><span className='span-primary'>{props.category}</span> </h4>
            </div>

            <div className='col-lg-5 col-sm-8 align-self-center div-rate text-end'>
                    <div className='col-lg-6 col-sm-6 text-end'>
                        <ul>
                            <li><span style={{"color":"yellow"}} className="px-2"><FaStar/></span>{props.rate} </li>
                            <li><span style={{"color":"var(--color-primary)"}}><FaDownload /></span>{props.download}</li>
                        </ul>
                    </div>
            </div>

            <hr />
        </div>
    </div>
  )

}

export default RelatedGamesCard