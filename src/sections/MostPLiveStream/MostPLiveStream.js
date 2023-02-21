import React from 'react'
import { MPLiveStream } from '../../Components'


import {SectionWrapper,SectionHeader,SectionNextHeader ,MPLiveStreamCard} from '../../Components/index'
import DataspopulerStream from '../../Data/DataPopulerStream'


const MostPLiveStream = () => {

  const DataSLStream =DataspopulerStream.map(data=>{
    return(
      <MPLiveStreamCard key={data.id} imgeHeader={data.imgeHeader} imgIcon={data.imgIcon} title={data.titleStream} header={data.header}/>
    )
  })

  return (
    <div className='mt-5'>
        <SectionWrapper>

        <SectionHeader>Most Popular</SectionHeader><SectionNextHeader>Live Stream</SectionNextHeader>

        <div className='row my-4'>
            {DataSLStream}
        </div>
        
    </SectionWrapper>
    </div>
  )
}

export default MostPLiveStream