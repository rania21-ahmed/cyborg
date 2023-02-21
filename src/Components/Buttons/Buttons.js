import './Buttons.css'

const PrimaryButton=(props)=>{
    return(
        <div className='button promary-btn'>
            <a href='/#'>{props.children}</a>
        </div>
    )
}

const SecondaryButton=(props)=>{
    return(
        <div className='button secondary-btn'>
            <a href='/#'>{props.children}</a>
        </div>
    )
}

const StreamsButton=(props)=>{
    return(
        <div className='button th3-btn'>
            <a href='/#'>{props.children}</a>
        </div>
    )
}

export default PrimaryButton
export {SecondaryButton}
export {StreamsButton}
