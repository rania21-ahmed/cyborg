import './GamingLibary.css'
import {GamingCard,SectionWrapper,SectionHeader,SectionNextHeader} from '../../Components/index'
import GamingLibaryData from '../../Data/DataGaming'
export const GamingLibary = () => {
    const DatasGaming =GamingLibaryData.map(data=>{
        return(
            <GamingCard key={data.id} imge={data.imge} title={data.title} category={data.category} data_added={data.data_added} houer_player={data.houer_player} download={data.download}/>
        )
    })
  return (
    <div className='mt-5'>
      <SectionWrapper>
        <SectionHeader>GamingLibary</SectionHeader>
        <SectionNextHeader>Library</SectionNextHeader>
        <div className='games-items'>
                    
          {DatasGaming}
                    
        </div>
      </SectionWrapper>
    </div>
    
    
  )
}

export default GamingLibary
