/*
    <div>
        <h1>Hello world from react</h1>
    </div>
*/

// const h1 = React.createElement("h1", {}, "Hello world from react")


// const h1 = React.createElement("h1", {id: "heading", xyz:"abc"}, "Hello world from react")
const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(h1)

/*
    {} --> this obj is used to give attributes to the element like id class
    remember: react element are js objects
    and this h1 is react element and so a js object

    ***create element returns an object or react element and then render takes the object convert it to HTML element or tag and put it in the root***

    in console-> sources:
    {} --> everthing inside these bracket is called or is in props
    "Hello world from react "  -> this is called or is in children
*/


/*
    <div>
        <div>
            <h1>Hello</h1>
            <h2>World!!!</h2>
        </div>
        <div>
            <h1>Hello</h1>
            <h2>World!!!</h2>
        </div>
    </div>
*/

const parent = React.createElement("div", {id: "parent"},[
    React.createElement("div", {id: "child1"},[
        React.createElement("h1", {}, "Hello"),
        React.createElement("h2", {}, "World!!!")
    ]),
    React.createElement("div", {id: "child2"},[
        React.createElement("h1", {}, "Hello"),
        React.createElement("h2", {}, "World!!!")
    ]     
    )
]
    
)

root.render(parent)

// this whole is hard to read so we use JSX

/*
    library vs framework

    library works can work independently with only a small protion of app
    react is library
    it works only with root div and doesn't effect anyhting outside it

    root is basically the area of app we are using react or rendering using react

    whereas framework comes with all loads of things

*/

/*
    and also note that the order of files matter in react js

    first script of react which is common to all whether the react is getting used in phn or chrome browser or any other browser

    the second script for reactDOM which is specific to chrome browser (read abt it more)

    then third script for app.js where we are writing react code

*/



