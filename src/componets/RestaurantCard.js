import { Link, useParams } from "react-router-dom"
import { CDN_URL } from "../utilies/constants"
import { MdStars} from "react-icons/md";

const RestaurantCard = (props) => {
    const {resData} = props

    const {
        cloudinaryImageId, 
        name, 
        avgRating, 
        sla, 
        cuisines,
        id,
        locality
    } = resData?.info

    const resId = useParams()

    return (
        <div className="w-[17%] min-w-[220px] p-1 hover:cursor-pointer transition-transform hover:scale-95">
            <Link to = {"/restaurant/" + id} style={{textDecoration: "none", color: "black"}}>
                <img className="rounded-xl w-full h-[220px]" src={ CDN_URL + cloudinaryImageId}></img>
                <div className="p-1">
                    <h3 className="font-bold">{name}</h3>
                    <div className="flex items-center py-1">
                        <MdStars color="green" size={20}/>
                        <h4>{avgRating} • {sla.deliveryTime} mins</h4>
                    </div>
                    <h5>{cuisines.join(", ")}</h5>
                    <h5 className="py-1">{locality}</h5>
                </div>
            </Link>
        </div>
        
    )
}

export default RestaurantCard


export const withPromotedLabel = (RestaurantCard) =>{
    return (props) =>{
        return <div>
            <label>Promoted</label>
            <RestaurantCard {...props}/>
        </div>
    }
}