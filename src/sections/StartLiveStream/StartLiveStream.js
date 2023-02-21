import "./StartLiveStream.css"
import {SectionHeader,SectionNextHeader,PrimaryButton,StartLiveStreamCard} from '../../Components/index'
import DstartLiveStream from '../../Data/DataStartLiveStream'


const StartLiveStream=()=>{

    const DataStart =DstartLiveStream.map(data=>{
        return(
            <StartLiveStreamCard key={data.id} imge={data.imge} header={data.header} paragraph={data.paragraph} />
        )
    })

    return(
        <div className="start-live-stream">

            <div className="text-center py-5">
                <SectionHeader>How To Start Your</SectionHeader>
                <SectionNextHeader>Live Stream</SectionNextHeader>
            </div>
            
            <div className="row">
                {DataStart}
            </div>
            

            <div className="text-center mt-5">
                <PrimaryButton>Go to Profile</PrimaryButton>
            </div>

        </div>
    )
}

export default StartLiveStream