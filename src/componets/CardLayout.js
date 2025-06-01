import { Link, useParams } from "react-router-dom"
import { CDN_URL } from "../utilies/constants"
import { MdStars} from "react-icons/md";

const CardLayout = (props) => {
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
        <div className="card zoom-on-hover">
            <Link to = {"/restaurant/" + id} style={{textDecoration: "none", color: "black"}}>
                <img className="res-img" src={ CDN_URL + cloudinaryImageId}></img>
                <div className="res-text">
                    <h3>{name}</h3>
                    <div className="rating-box">
                        <MdStars color="green" size={20}/>
                        <h4>{avgRating} • {sla.deliveryTime} mins</h4>
                    </div>
                    <h5>{cuisines.join(", ")}</h5>
                    <h5>{locality}</h5>
                </div>
            </Link>
        </div>
        
    )
}

export default CardLayout