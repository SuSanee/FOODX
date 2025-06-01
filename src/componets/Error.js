import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    // console.log(err)
    return (
        <div className="bg">
            <h1>Opps!!!!</h1>
            <h2>Something went wrong!!</h2>
            {/* <h3>{err.status} : {err.statusTet}</h3> */}
        </div>
    )
}

export default Error