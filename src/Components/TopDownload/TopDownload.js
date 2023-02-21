import './TopDownload.css'
import {SectionWrapper , SectionHeader,SectionNextHeader,DownloadCard} from '../index'
import DataGaming from '../../Data/DataGaming'

const TopDownload = () => {
  const TopData =DataGaming.map(data=>{
    return(
      <DownloadCard key={data.key} imge={data.imge} title={data.title} category={data.category}/>
    )
  })
  return (
    <>
    <SectionWrapper>
        <SectionHeader>Top</SectionHeader><SectionNextHeader>Download</SectionNextHeader>
        {TopData}
        <div className="text-download">
         View All Games
        </div>
    </SectionWrapper>
    </>
    
  )
}

export default TopDownload
