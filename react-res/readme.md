# React JS

## Overview
To Learn:

* Components
* JSX
* State
* Props
* Lifecycle Methods
* Event Handling
* Styling
* Forms
* HTTP

### Prequisite
* HTML
* CSS
* JS { ES6 syntax too. }

## Projects to build
* TODO app
* Meme Generator

## REACT

### Why React ?

* Virtual DOM [i.e. makes react work faster than vanilla JS]
* Web components [Makes the code clean, reusable as we divide the code into components and assign it to variables.]
* Maintained by facebook


### Installing | Setting up react

Use create-react-app
`npx create-react-app my-app`
`cd my-app`
`npm start`

React uses **CapitalCamelCase** convention

### [X] (0:09:25) ReactDOM & JSX

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));
```
react is responsible to interpret JSX, that's why we import it.
JSX is mostly HTML, with some advantages for JS.


We can't have two adjacent JSX elements

### [ X ] (0:20:34) Functional Components

Components wrapped inside a function.
Functional components too, can return only **one JSX element**. ( *Use div
to wrap everything into one function* )

```javascript
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

    ReactDOM.render(<MyList />, document.getElementById("root"));
```

### [ X ] (0:24:32) Functional Components Practice
Spaced learning and repetition.

```javascript
    import React from "react";
    import ReactDOM from "react-dom";

    function MyList(){
        return ( 
            <div>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
                <h1>Top Vacation Spots</h1>
                <ol>
                    <li>Japan</li>
                    <li>South Korea</li>
                    <li>Russia maybe X)</li>
                </ol>
            </div>
            );
    }

    ReactDOM.render(<MyList />, document.getElementById("root"));
```

### [ X ] (0:29:41) Move Components into Separate Files

A good convention is that Each file must contain one component.


File: index.js
```javascript
import React from "react";
import ReactDOM from "react-dom";
import MyList from "./components/MyList";

ReactDOM.render(<MyList/>, document.getElementById("root"));
```

The convention to name the file is to keep the filename same as component name.
We import react as we are including JSX.


File: components/MyList.js

```javascript
import React from "react";

function MyList(){
    return ( 
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    );
}

export default MyList;
```


We use export default in case we don't want the function/class etc. passed to be imported by that specific name only.

In case we are only exporting a single class/function etc. we can use export default.

We can use export default only once in a file.


### [ X ] (0:35:07) Parent/Child Components

File: components/App.js
```javascript
import React from "react";

import MyList from "./MyList";

function App(){
    return (
        <div>
            <h1>This is my List.</h1>
            <p>The list has personalised catered items</p>
            <MyList />
        </div>   
    );
}

export default App;
```

File: components/MyList.js

```javascript
import React from "react";

function MyList(){
    return ( 
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    );
}

export default MyList;
```

File: index.js

```javascript
import React from "react";
import ReactDOM from "react-dom";
import MyList from "./components/App";

ReactDOM.render(<App/>, document.getElementById("root"));
```

In react we have components -> App, MyList (the functions that we create and later call using `<App />` etc.)
Elements are the base -> HTML like `<div></div>` 

Components act as the root in React.



### [X] (0:43:14) Parent/Child Component Practice

**Child:**

File: components/Header.js

```javascript
function Header(){
    return (
        <header>
            <h1>This is my List.</h1>
            <p>The list has personalised catered items</p>
        </header>    
    );
}

export default Header;
```

File: components/MyList.js

```javascript
import React from "react";

function MyList(){
    return ( 
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    );
}

export default MyList;
```


File: components/Footer.js
```javascript
import React from "react";

function Footer(){
    return (
        <footer>
            <h2>This was a practice session.</h2>
        </footer>
    );
}

export default Footer;

/* 
We use export default in case we don't want the function/class etc. passed to be imported by that specific name only.
In case we are only exporting a single class/function etc. we can use export default.
We can use export default only once in a file.
*/
```

Here `Footer` is a component while `<footer>` is an element.

**Parent:**
File: Components/App.js

```javascript

import React from "react";

import Header from "./Header";
import MyList from "./MyList";
import Footer from "./Footer";

function App(){
    return (
        <div>
            <Header />
            <MyList />
            <Footer />
        </div>   
    );
}

export default App;
```

### [ ] (0:48:12) Todo App - Phase 1
### [X] (0:50:50) Styling React with CSS Classes


Use className DOM API to give class to react elements for styling.

Don't give className to react Components.

File: components/Header.js
```javascript
import React from "react";

function Header(){
    return (
        <header className="navbar">
            <h1>This is my List.</h1>
            <p>The list has personalised catered items</p>
        </header>    
    );
}

export default Header;
```

Provide the necessary styling in the style sheet for the class, here navbar and include the style.css in html as we usually do.


**NOTE**: React is used as a server side templating engine.


### [X] (0:58:12) JSX to JavaScript and Back

inside JSX if we want to include JS, we do it by using **{}**, 

**{** defines that from here inside our JS code is starting in JSX, we can write any valid JS code here and when we are done we close it by using **}**

```javascript
import React from "react";

function App(){
    var firstName = "Abhishek";
    var lastName = "Singh";
    /*

    return (
        <h1>Hi firstName + " " + lastName</h1>
    );

    This outputs the exact thing <h1>Hi firstName + " " + lastName</h1> in the browser, thus we can't directly put 
    JS admist JSX.


    */

   return (
       <h1>Hi { firstName + " " + lastName }</h1> // Outputs Hi Abhishek Singh
   );
}
```
```javascript 
return (
    <h1>{`${firstName} + " " + ${lastName}`}</h1> //Using ES6 for the same
);
```
### [X] (1:02:11) Inline Styles with the Style Property

For making components more dynamic using the CSS properties we can use the inline style property.

For App component
```javascript 
return (
    <h1 style={{background: "Black", backgroundColor: "Gray"}}>Hello World</h1>
    /* 
    
    Here we send {} ( object ) to the style property
    thus we have 
    {
        background: Black,
        backgroundColor: Gray
    }

    but since we are admist JSX we need to switch to JS before we can send an object,

    so we wrap the object into {{background: Black, backgroundColor: Gray}}

    */
);
```

Since JS cannot have a property name with - (naming Convention), in between thus we replace all such CSS properties with

background-color -> backgroundColor
font-size -> fontSize


For cleaner code we may write the above script as

```javascript
import React from "react";

function App(){
    var firstName = "Abhishek";
    var lastName = "Singh";
    // CSS object
    var introStyle = {
        fontSize: "200px",
        backgroundColor: "Black",
    }

    /* 
    Later we can play with the assigned values to the styling object and change the properties accordingly to 
    make the style more dynamic. We can utilise dot notation etc. to play and change the properties of the styling object.
    
    if(place condition){
        introStyle.backgroundColor =  Gray;
    }
    */
   return (
       <h1 style={introStyle}>Hi { firstName + " " + lastName }</h1>
   );
}

```

### [ ] (1:09:21) Todo App - Phase 2


### [X] (1:12:42) Props Part 1 - Understanding the Concept
### [X] (1:14:56) Props Part 2 - Reusable Components
### [Xs] (1:17:29) Props in React


Props refer to properties/attributes in JSX.
Passing properties(props) in react components(JSX):

Converting this kind of list into dynamic react based design
```html

<h1>Abhishek Singh</h1>
<a href="github.com/gaharavara">gaharavara</a>

<h1>XYZ</h1>
<a href="github.com/X">X</a>

```

file: components/List.js
```javascript
import React from "react";
import Item from "./Item.js"

function List(){
    return (
        <div className="devlist">    
            <Item
                name="Abhishek Singh"
                link="github.com/gaharavara"
                userName="gaharavara"
            />

            <Item
                name="XYZ"
                link="github.com/X"
                userName="X"
            />

        </div>    
    );    
}

export default List;
```

file: components/Item.js
```javascript
import React from "react";

function Item(props){
    return (
        <div>
            <h1>{props.name}</h1>
            <a href={props.link}>GitHub: {props.userName}</a>
        </div>
    )
}

export default Item;

```

A better way would be to wrap all the properties in a single object and
send them, to mimic the behaviour of data sent in the form of JSON( the usual data we receive from APIs).

file: components/List.js
```javascript
import React from "react";
import Item from "./Item.js";

function List(){
    return (
        <div className="devlist">    
            <Item devList = {{ name: "Abhishek Singh", link: "github.com/gaharavara", userName="gaharavara"}}
            />

            <Item devList = {{name: "XYZ", link: "github.com/X", userName: "X"}}
            />

        </div>    
    );    
}

export default List;
```

Here since we are wrapping everything in an object we are switching from JSX to JS, thus we use `{}`, and inside we
form our object which we set equal to the property devList, which will be sent as props to Item.js

file: components/Item.js
```javascript
import React from "react";

function Item(props){
    return (
        <div>
            <h1>{props.devList.name}</h1>
            <a href={props.devList.link}>GitHub: {props.devList.userName}</a>
        </div>
    )
}

export default Item;

```

### [X] (1:29:39) Props and Styling Practice

To practice we will make a blog entry page.
Blog entry page will have a title, date, content for now.

file: index.js
```javascript
import React from "react"
import ReactDOM from "react-dom"
import BlogEntry from "./components/App.js"

ReactDOM.render(<App />, document.getElementById("root"))
```

file: components/App.js
```javascript
import React from "react"
import BlogEntry from "./components/BlogEntry.js"

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
```

file: components/BlogEntry.js
```javascript
import React from "react"
import BlogTitle from "./components/BlogTitle.js"
import BlogContent from "./components/BlogContent.js"

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
```

file: components/BlogTitle.js
```javascript
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
```

file: components/BlogContent.js
```javascript
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
```

### [X] (1:40:25) Mapping Components

Higher order methods are one of the essential components of javascript programming
Example of higher order methods are map, filter, reduce, every, sort, some, find, findindex etc.

```javascript
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var mapped_arr = arr.map(function(num){
    return num-1;
})

console.log(mapped_arr);
/* 
Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

What map basically does is for every element in arr it passes the element inside
the functiion as num, the function performs the logic ( num-1 here), a new array 
with the resultant elements is stored in mapped_arr
*/
```

file: components/App.js
```javascript
import React from "react"
import BlogEntry from "./components/BlogEntry.js"

/*
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
*/

// In case we are getting our data from any external source( like in real life, JSON mostly)
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
```
### [X] (1:48:27) Mapping Components Practice
### [X] (1:53:44) Todo App - Phase 3

### [X] (1:58:16) Class-based Components
Class components
As we go to an advanced level we notice, Functional components are not enough
( i.e. lack functionality, which we can only implement through Class components like states,
lifecycle methods etc. )

```javascript
import React from "react";
/*
    function App(){
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        );
}
*/

// Shifting the above Functional component to Class component

class App extends React.Component {

    render (){
        /* This method is must to implement as it is responsible to return the
            rendering element.
           The render method can include style, conditional rendering etc.
        */ 
       return (
           <div>
                <h1>Hello World!</h1>
           </div>
       )
    }

}

export default App;
```

### [X] (2:03:32) Class-based Components Practice

convert the following into class based components

Functional components
```javascript
import React from "react";
import ReactDOM from "react-dom";

// #1
function App(){
    return (
        <div>
            <Header username = "Ram"/>
            <Greeting />
        </div>
    )
}

// #2
function Header(props){
    return (
        <header>
            <p>Welcome {props.username}!</p>
        </header>
    )
}

// #3
function Greeting() {
   const date = new Date();
   const hours = date.getHours()
   let timeOfDay

   if(hours < 12) {
       timeOfDay = "Morning";
   } else if (hours >= 12 && hours <= 17) {
       timeOfDay = "Afternoon";
   } else {
       timeOfDay = "Night";
   }

   return (
       <h1>Good {timeOfDay} to you sir or madam!</h1>
   )
}

ReactDOM.render(<App />, document.getElementById("root"));
```
Class-based components
```javascript
import React from "react";
import ReactDOM from "react-dom";

// #1
class App extends React.components {

    render() {
        return (
            <div>
                <Header username = "Ram"/>
                <Greeting />
            </div>
        )
    }

}
    

// #2
class Header extends React.components {
    
    render(){
        return (
            /*  In case of class based components we use this keyword to access
                the props and methods etc. ( basically to call a method of the class use this.methodName(), simply apply the class related concepts in JS )
            */
            <header>
                <p>Welcome {props.username}!</p>
            </header>
        )
    }

}

// #3
class Greeting extends React.components {

    render(){
        const date = new Date();
        const hours = date.getHours()
        let timeOfDay

        if(hours < 12) {
            timeOfDay = "Morning";
        } else if (hours >= 12 && hours <= 17) {
            timeOfDay = "Afternoon";
        } else {
            timeOfDay = "Night";
        }

        return (
            <h1>Good {timeOfDay} to you sir or madam!</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
```
### [X] (2:07:11) State
State is the data that a component maintains.
We can have state only for class based components.

Why do we need stat?
we can't change the data inside props, as doing so will create irregularities and
inconsistency in the data. Thus we should never directly change data inside props.
i.e. props.username = "Joe"; -> X

In case we need to have a field whose data can be changed, we use state to do so!
state maintains the data for the component, i.e. it makes sure that in case if the
data is changed, all the places that use that data are passed with new data and new
components( for example all the child components that may be using that data ) are generated accordingly.

we can use set state to change/set a new value of the data inside our current state.
```javascript
import React from "react"

class App extends React.Component {
    constructor(){
        // We call super to call the constructor of React.Component
        super()
        this.state = {
            answer: "YEAH!"
        }
    }

    render(){
        return (
            <div>
                <h1>My answer is {this.state.answer}</h1>
            </div>
        )
        /*
        return (
            <div>
                <ChildComponent answer={this.state.answer} />
                // Such components on change in this.state.answer will be regenerated // and updated accordingly.
            </div>
        )
    }
}


export default App;
```
### [X] (2:12:08) State Practice
```javascript
import React from "react"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            name : "Abhishek",
            age : 20
        }
    }

    render(){
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>    
            </div>
        )
    }

}
```
### [X] (2:15:45) State Practice 2
```javascript
import React from "react"

function App() {
    return (
        <div>
            <h1>You are currently logged (in/out)</h1>
        </div>
    )
}

export default App
```

* Given a stateless functional component, add state to it
* State should have  a property called `isLoggedIn` which is a boolean
* Render logged in and out accordingly

```javascript
import React from "react"

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            isLoggedIn : true
        }
    }

    render() {
        // Later, we will look into conditional rendering
        let output
        if(this.state.isLoggedIn){
            ouput = "out"
        } else {
            output = "in"
        }
        return (
            <div>
                <h1>You are currently logged {output}</h1>
            </div>
        )
    }
}

export default App
```
### [] (2:19:59) Todo App - Phase 4

### [X] (2:22:05) Handling Events in React
Events here means signals generated in case the user clicks, hovers etc. ( i.e 
interacts with your web page )

Event handlers in react are similar to how regular html handlers are with some minute changes like the handlers in react follows the regular javascript convention i.e. camel case.
We can check for the supported events list in react documentation.

```javascript
import React from "react"

function handleClick() {
    console.log("I am clicked")
}

function App() {
    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default App
```

### [ ] (2:25:52) Todo App - Phase 5
### [X] (2:27:11) Changing State
```javascript
import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count : 0
        }

        // Bind the handleClick method to this
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        /*
            Changing state is like changing clothes, we cannot repaint or
            edit our current clothes! we replace them with new clothes

            Thus here we use setState method to pass the new object to our state.

            setState is a method that comes from parent class React.Component and 
            thus we need to bind it.

            Also to be able to use setState we must be able to call it using 
            this.setState, thus we bind our current method handleClick with this
            context in constructor.
        */

        /* 
            using this.state to access attributes of the objects may some time work
            and some time not thus it is best to use a function where we can have the
            previous state as a parameter which then can be accessed and used.

            this.setState({ count: this.state.count+1 })
        */

        this.setState(function (prevState){
            return {
                count : prevState.count + 1
            }
        })

    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )

    }
}

export default App
```

Every time state changes all the components using that state are re-rendered.
### [ ] (2:39:29) Todo App - Phase 6
### [X] (2:47:14) Lifecycle Methods Part 1

Many major react lifecycle methods were depreceated, we can refer to react 
documentation to get a better understanding about our react version related 
lifecycle methods.

example of lifecycle method:

render() {

}

componentDidMount() {

// This method runs exactly once before the component is rendered for the first
// time, it can be used in a variety of ways like when we want to call an API to
// fetch some data at the beginning and this process needs to be done only once.

}

UNSAFE_componentWillReceiveProps() {

// This lifecycle method was depreceated in the version 16, this method executes
// every time we have a some new value passed as props this method is executed
// can be used when we want to alter the props, apply some formula etc. to derive
// some values everytime whenever props are changed or new props is passed.

}

shouldComponentUpdate(nextProps, nextState) {

// This react method returns True or False, and is called before rendering a 
// component, in react every time React thinks whether to re-render a component it
// re-renders it, this makes the whole app a bit slow in case we are doing useless
// re-rendering thus via this method 

}

componentWillUnmount() {

// This methods runs when a particular component is removed, it is basically like
// garbage collector method and can be used to clean variables, values etc. which are
// no longer needed thus increasing the efficiency of the overall app.

}

### [X] (2:56:45) Lifecycle Methods Part 2

static getDerivedStateFromProps() {

}

getSnapshotBeforeUpdate() {

// This method can be used to simply save or store the snapshot of the way things 
// were before the change or update, what we will have is a snapshot of object with
// values before the update changes something. 

}

### [X] (3:00:07) Conditional Rendering

### [ ] (3:11:26) Conditional Rendering Part 2
### [ ] (3:14:21) Conditional rendering Practice
### [ ] (3:23:00) Todo App - Phase 7
### [ ] (3:25:34) Fetching data from an API
### [ ] (3:36:34) Forms Part 1
### [ ] (3:48:55) Forms Part 2
### [ ] (4:00:11) Forms Practice
### [ ] (4:24:29) Container/Component Architecture
### [ ] (4:35:53) Meme Generator Capstone Project
### [ ] (4:56:11) Writing Modern React Apps
### [ ] (5:02:17) Project Ideas for Practicing
### [ ] (5:03:06) Conclusion