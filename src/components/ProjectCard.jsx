import React from "react";

const ProjectCard = (props) => {
    let tags = props.tags
  return (
    <div>
      <div className="project-card">
        <img
          src={props.src}
          alt="website image"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
            marginBottom: "15px",
          }}
        />
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
        <div className="tags">
          {tags.map(item =>{
            return <span className="tag" key={item}>{item}</span>
})}
        </div>
        <div className="buttons">
          <a href={props.live} target="__blank__" className="btn primary">
            Live Site
          </a>
          {props.code.trim() !=="" && (
            <a href={props.code} className="btn secondary">
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
