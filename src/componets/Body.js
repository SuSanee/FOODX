import CardLayout from "./CardLayout"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRes, setListOfRes] = useState([]);
    const [FilteredList, setFilteredList] = useState([])

    const [searchValue, setSearchValue] = useState("")

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log(json)

        setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)   
    }

    if(listOfRes.length === 0){
        return <Shimmer/>
    }

    return (
        <div className="body">
            <div className="filter">

                {/* search */}
                <div className="search">
                    <input type="text" className="search-box" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}></input>
                    <button onClick={() =>{
                        console.log(searchValue)

                        let FilteredResList = listOfRes.filter((res) => res.info.name.toLowerCase().includes(searchValue.toLowerCase()));
                        setFilteredList(FilteredResList);
                    }}>Search</button>
                </div>

                {/* top-rated */}
                <div className="topRated">
                    <button 
                        className="top-btn" 
                        onClick={() => {
                            let FilteredResList = listOfRes.filter((res)=> res.info.avgRating>4.5)
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