import React from 'react';
import { useSpring, animated } from 'react-spring'

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

return(
    <animated.div className='p-card-info' style={style}>
        <p className='p-card-title'>{props.title}</p>
        <p className='p-card-sub-title'>{props.subTitle}</p>
        <a href={props.link} className='p-link-view' target='_blank' rel='noopener noreferrer'>Repo  </a>
        
        <a href={props.link2} className='p-link-view' target="_blank" rel="noopener noreferrer">DEMO</a>
    </animated.div>
)
}

export default CardInfo;