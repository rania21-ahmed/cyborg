import './LiveStreamer.css'
import {SectionHeader,SectionWrapper ,SectionNextHeader,MPLiveStreamCard} from '../../Components/index'
import {DataspopulerStreamers} from '../../Data/DataPopulerStream'


const LiveStreamer = () => {

    const DataLiveStreaner =DataspopulerStreamers.map(data=>{
        return(
            <MPLiveStreamCard key={data.id} imgeHeader={data.imgeHeader} imgIcon={data.imgIcon} title={data.titleStream} header={data.header}/>
        )
    })

  return (
    <div className='pt-5'>
        <SectionWrapper >
            <SectionHeader>Most Populer</SectionHeader>
            <SectionNextHeader>Live Streamers</SectionNextHeader>

            <div className='row '>
                {DataLiveStreaner}
            </div>

        </SectionWrapper>
    </div>
  )
}

export default LiveStreamer
