import { FaAngleDown } from "react-icons/fa";
import ItemList from "./ItemList";

const RestaurantCategory = ({categoryData, showItems, setShowIndex}) =>{
    
    const handleClick = () => {
        setShowIndex()
    }

    return <div className="res-text border bg-gray-100 p-3 font-medium mt-5 shadow-lg">
        {/* header */}
        <div className="flex items-center justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold">{categoryData.title} ({categoryData.itemCards.length})</span>
            <span><FaAngleDown /></span>
        </div>
        {/* body */}
        {showItems && <ItemList items = {categoryData.itemCards} ></ItemList>}
    </div>
}

export default RestaurantCategory