import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MdStars} from "react-icons/md";
import useRestaurantMenu from "../utilies/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const ResMenu = () => {
    const {resId} = useParams()
    const resMenu = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null)

    if(resMenu == null) return <Shimmer/>

    const {name, cuisines, costForTwoMessage, areaName, avgRating} = resMenu?.data?.cards[2]?.card?.card?.info;

    const categories = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')

    return (
        <div className="bg-[#fdfcfb] w-1/2 transform translate-x-1/2 m-12 p-1">
            <div className="text-3xl font-bold pb-1 border-b mb-2">
                <h1>{name}</h1>
            </div>
            <div className="res-text border rounded-lg bg-gray-100 p-3 font-medium mt-5">
                <div className="flex items-center">
                    <MdStars color="green" size={20}/>
                    <h4>{avgRating} • {costForTwoMessage}</h4>
                </div>
                
                <h4 className="text-green-800 underline">{cuisines.join(", ")}</h4>
                <h4>{areaName}</h4>
            </div>
            <div className="my-5 text-center tracking-widest text-gray-700">
                <h3>--•MENU•--</h3>
            </div>
            
            <div className="">
                {categories.map( (category, index ) => 
                    <RestaurantCategory key={category.card.card.categoryId} 
                    categoryData = {category.card.card}
                    showItems = {index === showIndex ? true : false }
                    setShowIndex = {() => setShowIndex(index)} />

                )}   
            </div>
            
        </div>
    )  
}

export default ResMenu;