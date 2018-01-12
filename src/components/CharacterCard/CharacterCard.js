import React from "react";
import "./CharacterCard.css";

const characterCard = props => (
	<div onClick={() => props.setClicked(props.id)} className="card">
		<div className="img-container">
      		<img alt={props.name} src={props.image} />
    	</div>
  </div>
);
  
  
  // <div className="card">
  //   <div className="img-container">
  //     <img alt={props.name} src={props.image} />
  //   </div>
  //   <div className="content">
  //     <ul>
  //       <li>
  //         <strong>Name:</strong> {props.name}
  //       </li>
  //     </ul>
  //   </div>
  // </div>


export default characterCard;
