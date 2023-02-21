import './Mostpopuler.css'

import {Card,SectionHeader,SectionWrapper,SectionNextHeader} from '../../Components/index'
import MostPopulerDatas from '../../Data/DataPopuler'
const MostPopuler=()=>{

    const Datas =MostPopulerDatas.map(data=>{
        return(
            <Card key={data.id} imge={data.imge} title={data.title} category={data.category} rate={data.rate} download={data.download}/>

        )
    })
    return(
        <div className="mt-5">
            <SectionWrapper>
                <SectionHeader>Most Populer </SectionHeader>
                <SectionNextHeader>Right Now</SectionNextHeader>
                    <div className='row'>
                         {Datas}
                    </div>
                    
            </SectionWrapper>
        </div>
        
    )
}

export default MostPopuler;