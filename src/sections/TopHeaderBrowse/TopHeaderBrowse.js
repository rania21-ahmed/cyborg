import './TopHeaderBrowse.css'
import {SliderImg,TopDownload} from '../../Components/index'

const TopHeaderBrowse = () => {
  return (
    <div className='row'>
        <div className="col-lg-8 col-sm-12"><SliderImg /></div>
        <div className="col-lg-4 col-sm-12 div-top-download-browse"><TopDownload/></div>
        
    </div>
  )
}

export default TopHeaderBrowse
