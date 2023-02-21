import React,{Component} from 'react'
import './SliderImg.css'
import {SectionWrapper ,SectionHeader,SectionNextHeader} from '../index'

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import {FeatureGameCard }from '../index'
import FeaturedGame from '../../Data/DataFatureGame'
class SliderImg extends React.Component {
    
    

    render(){

        const FeaturedData =FeaturedGame.map(data=>{
            return(
                <FeatureGameCard key={data.id} imge={data.imge} title={data.title} category={data.category} rate={data.rate} download={data.download} />
            )
        })
        const state={
           
            responsiveClass:true,
            nav:false,
            loop:false,
              responsive:{
                  500:{
                      items:1
                  },
                  792:{
                      items:2
                  },
                  1200:{
                      items:3
                  }
              }
        }
    

        return(
            <SectionWrapper>
            <SectionHeader>Featured</SectionHeader> <SectionNextHeader>Games</SectionNextHeader>
    
               <OwlCarousel items={3} className="owl-theme" loop nav margin={5} autoplay={true} responsive={state.responsive}>
                    {FeaturedData }
                
               </OwlCarousel>
            
            
        </SectionWrapper>
        
        )
   
        }
}

export default SliderImg;



