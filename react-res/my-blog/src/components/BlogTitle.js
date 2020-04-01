import React from "react";

function BlogTitle(props){
    return (
        <div>
            <h1>{props.blogTitle.title}</h1>
            <h5>{props.blogTitle.date}</h5>
        </div>
    )
}

export default BlogTitle;