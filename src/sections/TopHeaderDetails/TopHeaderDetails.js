import './TopHeaderDetails.css'
import featureLift from '../../assets/imges/feature-left.jpg'
import featureRight from '../../assets/imges/feature-right.jpg'
const TopHeaderDetails = () => {
  return (
    <>
      <div className='row'>
          <div className='col-lg-4 col-sm-12'>
              <img src={featureLift} className='featureImg w-100 h-100'/>
          </div>
          <div className='col-lg-8  col-sm-12 sm-mt-3'>
              <img src={featureRight} className='img featureImg w-100' />
          </div>
      </div>
      
      <h2 className='featureheader'>FORTNITE DETAILS</h2>
        
    </>
    
  )
}

export default TopHeaderDetails
