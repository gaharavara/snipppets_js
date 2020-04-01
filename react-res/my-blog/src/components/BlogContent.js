import React from "react";

function BlogContent(props){
    return (
        <div>
            <p>{props.blogContent.content}</p>
            <br />
            <p style={{color: "blue", fontStyle: "italic"}}>{props.blogContent.author}</p>
        </div>
    )
}

export default BlogContent;