import './TopHeaderStream.css'
import {SliderImgStream ,TopStream} from '../../Components/index'

const TopHeaderStream = () => {
  return (
    <div className='row'>
        <div className='col-lg-8'><SliderImgStream/></div>
        <div className='col-lg-4'><TopStream /></div>
    </div>
  )
}

export default TopHeaderStream