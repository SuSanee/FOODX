import { FaAngleDown } from "react-icons/fa";
import ItemList from "./ItemList";
import { addItem } from "../utilies/cartSlice";
import {useDispatch} from "react-redux"

const RestaurantCategory = ({categoryData, showItems, setShowIndex}) =>{

    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    
    const handleClick = () => {
        if(showItems)
            setShowIndex(null)
        else
            setShowIndex()
        
    }

    return <div className="res-text border bg-gray-100 p-3 font-medium mt-5 shadow-lg">
        {/* header */}
        <div className="flex items-center justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold">{categoryData.title} ({categoryData.itemCards.length})</span>
            <span><FaAngleDown /></span>
        </div>
        {/* body */}
        {showItems && <ItemList items = {categoryData.itemCards} onClickFun = {handleAddItem} string = {"ADD"}></ItemList>}
    </div>
}

export default RestaurantCategory