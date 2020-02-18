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
### [ ] (0:35:07) Parent/Child Components

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

In react we have components -> App, MyList (the functions that we create and later call using <App /> etc.)
Elements are the base -> HTML like <div></div> 

Components act as the root in React.
### [ ] (0:43:14) Parent/Child Component Practice
### [ ] (0:48:12) Todo App - Phase 1
### [ ] (0:50:50) Styling React with CSS Classes
### [ ] (0:55:56) Some Caveats
### [ ] (0:58:12) JSX to JavaScript and Back
### [ ] (1:02:11) Inline Styles with the Style Property
### [ ] (1:09:21) Todo App - Phase 2
### [ ] (1:12:42) Props Part 1 - Understanding the Concept
### [ ] (1:14:56) Props Part 2 - Reusable Components
### [ ] (1:17:29) Props in React
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