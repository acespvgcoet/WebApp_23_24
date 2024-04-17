import React from "react";

function CardContent(props) {
    return (
        <div className="article-content">
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default CardContent;