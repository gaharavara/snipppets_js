import React from "react"
import BlogTitle from "./BlogTitle.js"
import BlogContent from "./BlogContent.js"

function BlogEntry(props){
    return (
        <div className="blog-entry">
            <BlogTitle
            blogTitle = {{
                title: props.blogData.title,
                date: props.blogData.date
            }}
            />
            <BlogContent
            blogContent = {{
                content: props.blogData.content,
                author: props.blogData.author
            }}
            />
        </div>
    )
}

export default BlogEntry;