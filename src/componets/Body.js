import CardLayout from "./CardLayout"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGY_API_URL } from "../utilies/constants";
import { IoSearch } from "react-icons/io5";
import useOnlineStatus from "../utilies/useOnlineStatus";

const Body = () => {
    const [listOfRes, setListOfRes] = useState([]);
    const [FilteredList, setFilteredList] = useState([])

    const [searchValue, setSearchValue] = useState("")

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() => {
        const data = await fetch(SWIGY_API_URL)
        const json = await data.json()
        console.log(json)

        setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)   
    }

    if(useOnlineStatus() === false) return(
        <div>
            <h1>Uh-Oh!!!!</h1>
            <h2>No Internet Connection</h2>
        </div>
    
    )

    if(listOfRes.length === 0){
        return <Shimmer/>
    }


    return (
        <div className="body bg">
            <div className="filter">

                {/* search */}
                <div className="search-box">
                    <input type="text" className="search-input" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} 
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            const FilteredResList = listOfRes.filter((res) =>
                                res.info.name.toLowerCase().includes(searchValue.toLowerCase())
                            );
                            setFilteredList(FilteredResList);
                        }
                    }}></input>
                    <IoSearch className = "search-icon" onClick={() =>{
                        console.log(searchValue)

                        let FilteredResList = listOfRes.filter((res) => res.info.name.toLowerCase().includes(searchValue.toLowerCase()));
                        setFilteredList(FilteredResList);
                    }}/>
                </div>

                {/* top-rated */}
                <div className="topRated">
                    <button 
                        className="top-btn" 
                        onClick={() => {
                            let FilteredResList = listOfRes.filter((res)=> res.info.avgRating>4)
                            setFilteredList(FilteredResList);
                        }
                    }
                        
                    >
                        Top Rated Restraunts
                    </button>    
                </div>
            </div>

            <div className="res-container">
                {
                FilteredList.map((restraunt) => {
                    return <CardLayout key={restraunt.info.id} resData = {restraunt}/>
                })
                }

                
            </div>
            
        </div>
    )
}

export default Body;