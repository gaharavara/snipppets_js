import React from "react";
import ReactDOM from "react-dom";

function MyList(){
    return ( 
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    );
}

ReactDOM.render(<MyList/>, document.getElementById("root"));