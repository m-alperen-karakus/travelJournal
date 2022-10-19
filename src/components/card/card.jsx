import React from "react";
import "./card.css"
import mapIcon from "../../assets/mapIcon.svg"
export function Card(props) {
    return(
        <div className="card" style={{backgroundColor: props.backgroundColor}}>
            <img className="cardImg" src={props.imageUrl} />
            <div className="article">
                <div className="upperTitle">
                    <div className="location">
                        <img src={mapIcon} />
                        <div>{props.location}</div>
                    </div>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="title">{props.title}</div>
                <div className="subtitle">{props.startDate} - {props.endDate}</div>
                <p>{props.description}</p>
            </div>
        </div>
    )
}