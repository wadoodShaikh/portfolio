import React from 'react'

const TechstackCard = (props) => {
  return (
    <div>
      <div className="tech-card">
        <img
          src={props.src}
          alt={props.name}
        />
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default TechstackCard