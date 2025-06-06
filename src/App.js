import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./componets/Header"
import Body from "./componets/Body"
import About from "./componets/About"
import Contact from "./componets/Contact"
import Error from "./componets/Error"
import ResMenu from "./componets/ResMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "./utilies/appStore"


/*
// *********  JSX  ****
const jsxHeading = <h1 id = "heading" className="head"> React using JSX</h1>
root.render(jsxHeading);

// ******* React Component ******
const Title = () => (
    <h1 className="Name">
        Hello
    </h1>
)

// Component composition
const HeadingComponent = () => (
    <div id="container">
        <Title/>   
        <h1 className="react">
            This is<br></br>React using JSX!!!<br></br>
            {100+200}
            {console.log("ok")}
        </h1>
        {jsxHeading}
    </div>
)

root.render(<HeadingComponent/>)
*/

const AppLayout = () => (
    <Provider store={appStore}>
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
    </Provider>
)

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
        {
            path: "/",
            element: <Body/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/contact",
            element: <Contact/>,
        },
        {
            path: "/restaurant/:resId",
            element: <ResMenu/>,
        },
        ],
        
    }, 
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)




