import React from "react";

function Item(props) {
    console.log(props);
    return (
        <div>
            <h1>{props.name}</h1>
            <a href={props.url}>Handle: {props.handle}</a>
        </div>    
    );
}

export default Item;