import './BottomCenterDetails.css'
import details_01 from '../../assets/imges/details-01.jpg'
import details_02 from '../../assets/imges/details-02.jpg'
import details_03 from '../../assets/imges/details-03.jpg'

const BottomCenterDetails = () => {
  return (
    <div className='bottom-center-img'>
        <div className='row '>
            <div className='col-lg-4'>
                <img src={details_01} className="w-100 details_img"/>
            </div>
            <div className='col-lg-4'>
                <img src={details_02} className="w-100 details_img"/>
            </div>
            <div className='col-lg-4'>
                <img src={details_03} className="w-100 details_img"/>
            </div>
          
        </div>
        <div className='bottom-center-text'>
            <p className='bottom-center-text-p'>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a <def>small contribution via PayPal</def>  to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.</p>
            <br/>
            <span className="btn-down btn btn-lg btn-block">Download</span> 
        </div>
        
    </div>
  )
}

export default BottomCenterDetails
