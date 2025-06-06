import { FaStar } from "react-icons/fa6";
import { BsCaretDownSquare } from "react-icons/bs"
import { CDN_URL } from "../utilies/constants";

const ItemList = ({items}) => {
    console.log(items)
    return <div>
        <ul>
            {items.map (item => 
                <div key={item.card.info.id} className="m-3 p-2 border-b-2 border-gray-300 flex items-center justify-between gap-12">
                    <div className="w-9/12">
                        <span className=""><BsCaretDownSquare style={{color: item.card.info.isVeg ? 'green' : 'red'}}/></span>
                        <h3 className="text-gray-700 font-bold">{item.card.info.name}</h3>
                        <span className="font-medium font-medium"> ₹{item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price}</span>
                        <span className="flex items-center text-green-800 my-1.5 text-sm"><FaStar color="green"/>{item.card.info.ratings.aggregatedRating.rating}<span className="text-gray-500">({item.card.info.ratings.aggregatedRating.ratingCountV2})</span></span>
                        <p className="text-gray-500 text-sm mb-3">{item.card.info.description}</p>

                    </div>
                    <div className="w-3/12 my-3">
                        <img src={CDN_URL + item.card.info.imageId} className="rounded-xl"/>
                        <div className="absolute translate-x-6.5 -translate-y-5.5">
                            <button className="bg-white text-green-600 rounded-xl py-2 px-8 text-lg font-bold">ADD</button>
                        </div>
                        
                    </div>
                </div>
            )}
        </ul>
    </div>
}

export default ItemList