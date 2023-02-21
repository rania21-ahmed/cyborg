import './TopProfileHeader.css'
import HeaderProfile from '../../assets/imges/profile.jpg'
import {PrimaryButton ,SectionHeader,SectionNextHeader ,ClipsCard} from '../index'
import DataClipsCards from '../../Data/DataClipsCard'

const TopProfileHeader = () => {

  const dataClipsCard =DataClipsCards.map(data=>{
    return(
      <ClipsCard key={data.id} imge={data.imge} title={data.title} rate={data.rate} />
    )
})
  

  return (
    <div>

        <div className='row pb-4'>
          <div className='col-lg-4 col-sm-4'>
            <img src={HeaderProfile} alt=".." className='imgProfiles'/>
          </div>

          <div className='col-lg-4  offlineProfile align-self-center'>
                <div clasName="">
                  <a href="/#" className="offlineText">Offline</a>
                  
                </div>  
                <h3 className='offline-h3 my-3'>Alan Smithee</h3> 
                <p className='offline-p'>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                <PrimaryButton>Start Live Stream</PrimaryButton>
          </div>

          <div className='col-lg-4 div-right-progile '>
             <div className='div-into-right-profile py-4 px-3'>
                
                <div className='row py-3'>
                    <div className='col-lg-6 span-primary '>Games Downloaded</div>
                    <div className='col-lg-6 text-end row-right '>3</div>
                   
                </div>
                <hr />
                <div className='row py-3'>
                    <div className='col-lg-6 span-primary '>Friends Online</div>
                    <div className='col-lg-6 text-end row-right'>16</div>
                    
                </div>
                <hr />
                <div className='row py-3'>
                    <div className='col-lg-6 span-primary '>Live Streams</div>
                    <div className='col-lg-6 text-end row-right '>None</div>
                    
                </div>
                <hr />
                <div className='row py-3'>
                    <div className='col-lg-6 span-primary '>Clips</div>
                    <div className='col-lg-6 text-end row-right '>19</div>
                    
                </div>

             </div>
          </div>
          
        </div>

      <hr/>

      <SectionHeader>Your Most Popular</SectionHeader>
      <SectionNextHeader>Clips</SectionNextHeader>
      <div className='text-center'>
        <div className='row py-4'>
        {dataClipsCard}
        </div>
        
         <PrimaryButton>Load More clips</PrimaryButton>
      </div>

      

    </div>
  )
}

export default TopProfileHeader;
