import React from "react"
import BlogEntry from "./BlogEntry.js"

const json_data = [
    {
        date: "1/04/2020",
        title: "Learning React!", 
        content: "LoremIpsumfeofrsf",
        author: "gaharavara"
    },
    {
        date: "2/04/2020",
        title: "Learning React!", 
        content: "LoremIpsumfeofrsf",
        author: "gaharavara"
    },
    {
        date: "3/04/2020",
        title: "Learning React!", 
        content: "LoremIpsumfeofrsf",
        author: "gaharavara"
    }
]

// This is how we can use the map functionality, **React makes you a better js programmer** 
const mapped_components = json_data.map(function(blog_entry){
    return <BlogEntry blogData = {blog_entry}/>
})

function App(){
    return (
        <div>
            {mapped_components}
        </div>
    );
}

export default App;