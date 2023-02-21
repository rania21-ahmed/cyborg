import './TopStream.css'
import DataTopStream from'../../Data/DataTopStreams'
import {TopStreamCard ,SectionHeader,SectionNextHeader,SectionWrapper} from '../index'

const TopStream = () => {
    const DataTopStreamRight = DataTopStream.map(data=>{
        return(
            <TopStreamCard key={data.id} n={data.id} imgIcon={data.imgIcon} titleStream={data.titleStream}/>
        )
    })
  return (
    <SectionWrapper>
        <SectionHeader>Top</SectionHeader>
        <SectionNextHeader>Streamers</SectionNextHeader>

        {DataTopStreamRight}

    </SectionWrapper>
    
  )
}


export default TopStream