import './GamingCard.css'
import {SecondaryButton }from '../index'
const GamingCard = (props) => {
  return (

    <>
        <div className='gaming-card'>
            <ul className="row ">
                <li className='col-lg-1 col-sm-12 col-xs-12 img'><img src={props.imge} className=""/></li>
                <li className='col-lg-2 col-sm-6  col-xxs-6 text-center align-self-center li '><h4>{props.title} <br/><span> {props.category}</span></h4></li>
                <li className='col-lg-2 col-sm-6  col-xxs-6 text-center align-self-center li'><h4>Data Adding <br/><span>{props.data_added}</span></h4></li>
                <li className='col-lg-2 col-sm-6  col-xxs-6 text-center align-self-center li'><h4>Houer player<br/><span>{props.houer_player}</span></h4></li>
                <li className='col-lg-2 col-sm-6  col-xxs-6 text-center align-self-center li'><h4>Currently <br/><span>{props.download}</span></h4></li>
                <li  className='col-lg-3 col-sm-12 col-xs-12 text-center align-self-center btn-MP'> <SecondaryButton >Download</SecondaryButton></li>
            </ul>
        </div>
    </>
  )
}

export default GamingCard