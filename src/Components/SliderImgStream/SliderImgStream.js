import './SliderImgStream.css'
import {SectionWrapper ,SectionHeader,SectionNextHeader} from '../index'

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import {FeatureGameCard }from '../index'
import FeaturedGame from '../../Data/DataFatureGame'
const SliderImgStream = () => {
    
    const FeaturedData =FeaturedGame.map(data=>{
        return(
            <FeatureGameCard key={data.id} imge={data.imge} title={data.title} category={data.category} rate={data.rate} download={data.download} />
        )
    })
    const option={
     
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:5
              }
          }
    }

  return (
    <SectionWrapper>
        <SectionHeader>Live </SectionHeader> <SectionNextHeader>Streams</SectionNextHeader>

           <OwlCarousel items={3} className="owl-theme" loop nav margin={5} autoplay={true} >
                {FeaturedData }
            
           </OwlCarousel>
        
        
    </SectionWrapper>
    
  )
}

export default SliderImgStream;



