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

### [ ] (1:29:39) Props and Styling Practice
### [ ] (1:40:25) Mapping Components
### [ ] (1:48:27) Mapping Components Practice
### [ ] (1:53:44) Todo App - Phase 3
### [ ] (1:58:16) Class-based Components
### [ ] (2:03:32) Class-based Components Practice
### [ ] (2:07:11) State
### [ ] (2:12:08) State Practice
### [ ] (2:15:45) State Practice 2
### [ ] (2:19:59) Todo App - Phase 4
### [ ] (2:22:05) Handling Events in React
### [ ] (2:25:52) Todo App - Phase 5
### [ ] (2:27:11) Changing State
### [ ] (2:39:29) Todo App - Phase 6
### [ ] (2:47:14) Lifecycle Methods Part 1
### [ ] (2:56:45) Lifecycle Methods Part 2
### [ ] (3:00:07) Conditional Rendering
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