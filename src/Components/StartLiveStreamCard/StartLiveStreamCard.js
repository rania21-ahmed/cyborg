import './StartLiveStreamCard.css'

const StartLiveStreamCard = (props) => {
  return (
    <div className='col-lg-4  col-sm-12 main-streamCard'>
        <div className="stream-card mx-1 p-4 h-100 ">
            <img src={props.imge} alt="...." className='stream-card-img py-3'/>
            <h4 className='stream-card-header py-3'>{props.header}</h4>
            <p className='stream-card-p'>{props.paragraph}</p>
        </div>
        
    </div>
  )
}

export default StartLiveStreamCard
