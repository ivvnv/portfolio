import React from 'react';

import CardInfo from '../components/Cardinfo';

function Card(props) {
  return (
    <div className ='d-inline-block p-card' onClick={(e) => props.click(props.item)}>
      <img className='p-card-image' src={props.item.imgSrc} alt={props.item.imgSrc} />
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
          link2={props.item.link2}
        />
      )}
    </div>
  );
}

export default Card;