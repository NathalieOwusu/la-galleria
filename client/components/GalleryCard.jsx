import React from 'react';


const Card = ({ title, content, onClick}) => {

    return (
    <div className="card" onClick = { onClick }>
      <h2>{title}</h2>
      <p>{ content }</p>
    </div>
    );
};

export default Card;