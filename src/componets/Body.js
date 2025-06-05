import CardLayout, {withPromotedLabel} from "./RestaurantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
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

    const PromotedCard = withPromotedLabel(CardLayout)

    const fetchData = async() => {
        const data = await fetch(SWIGY_API_URL)
        const json = await data.json()
        console.log(json)

        setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
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
            <div className="flex items-center justify-center py-8">

                {/* search */}
                <div className="flex items-center justify-end border rounded w-72 mx-4 px-0.5">
                    <input type="text" className="w-full border-none focus:outline-none" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} 
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
                <div className="border px-2 py-1 rounded hover:bg-[#375a1e] hover:text-white transition-transform hover:scale-105">
                    <button  
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

            <div className="flex flex-wrap justify-center p-5 gap-5">
                {
                FilteredList.map((restraunt) => {
                    return restraunt.info.promoted ? <PromotedCard key={restraunt.info.id} resData = {restraunt}/> : <CardLayout key={restraunt.info.id} resData = {restraunt}/>
                })
                }

                
            </div>
            
        </div>
    )
}

export default Body;