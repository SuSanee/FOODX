import CardLayout from "./CardLayout"
import resList from "../utilies/mockData"
import { useState } from "react"

const Body = () => {
    const [listOfRes, setListOfRes] = useState(resList);
    return (
        <div className="body">
            <div className="topRated">
                <button 
                    className="top-btn" 
                    onClick={() => {
                        let FilteredResList = resList.filter((res)=> res.info.avgRating>4)
                        setListOfRes(FilteredResList);
                    }
                }
                    
                >
                    Top Rated Restraunts
                </button>    
            </div>

            <div className="res-container">

                {/*
                <CardLayout resData = {resList[0]} />
                <CardLayout resData = {resList[1]} /> ...
                */}

                {
                listOfRes.map((restraunt) => {
                    return <CardLayout key={restraunt.info.id} resData = {restraunt}/>
                })
                }

                
            </div>
            
        </div>
    )
}

export default Body;