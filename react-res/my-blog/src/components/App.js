import React from "react"
import BlogEntry from "./BlogEntry.js"

function App(){
    return (
        <div>
            <BlogEntry blogData = {{ date: "1/04/2020", 
            title: "Learning React!", 
            content: "LoremIpsumfeofrsf",
            author: "gaharavara" 
            }}
            />
            
            <BlogEntry blogData = {{ date: "2/04/2020", 
            title: "Learning React!", 
            content: "LoremIpsumfeofrsf",
            author: "gaharavara" 
            }}
            />

            <BlogEntry blogData = {{ date: "3/04/2020", 
            title: "Learning React!", 
            content: "LoremIpsumfeofrsf",
            author: "gaharavara" 
            }}
            />
        </div>
    )    
}

export default App;