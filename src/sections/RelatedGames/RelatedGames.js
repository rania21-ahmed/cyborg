import './RelatedGames.css'
import {SectionWrapper ,SectionHeader,RelatedGamesCard,SectionNextHeader} from '../../Components/index'
import RelatedGamesData from '../../Data/DataRelatedGames'
const RelatedGames = () => {

    const DataGamesRelated =RelatedGamesData.map(item =>{
        return(
            <RelatedGamesCard  imge={item.imge} title={item.title} category={item.category} 
            rate={item.rate} download={item.download}
            />
        )
        
    })
  return (
    <SectionWrapper>
        <SectionHeader>Other Related </SectionHeader><SectionNextHeader>Games</SectionNextHeader>
        <div className='related-games-items row'>
            <div className='related-games-items col-lg-6 col-sm-12'>
                {DataGamesRelated}
            </div>
            <div className='related-games-items col-lg-6 col-sm-12'>
                {DataGamesRelated}
            </div>
        </div>
    </SectionWrapper>
    
  )
}

export default RelatedGames
