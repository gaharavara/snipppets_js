import React from "react";
import Item from "./Item.js";

function MyList(){
    return ( 
    <ul>
        <Item
            name="Abhishek Singh"
            handle="github"
            url="github.com/gaharavara" 
        />
        <Item
            name="Abhishek Singh"
            handle="github"
            url="github.com/gaharavara" 
        />
        <Item
            name="Abhishek Singh"
            handle="github"
            url="github.com/gaharavara"        
        />
    </ul>
    );
}

export default MyList;