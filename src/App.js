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
import Cart from "./componets/Cart"


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
        {
            path: "/cart",
            element: <Cart/>
        }
        ],
        
    }, 
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)




