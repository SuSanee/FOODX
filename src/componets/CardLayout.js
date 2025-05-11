import { CDN_URL } from "../utilies/constants"

const CardLayout = (props) => {
    const {resData} = props

    const {
        cloudinaryImageId, 
        name, 
        avgRating, 
        deliveryTime, 
        cuisines
    } = resData?.info

    return (
        <div className="card">
            <img className="res-img" src={ CDN_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{avgRating} Stars</h4>
            <h4>{deliveryTime} mins</h4>
            <h5>{cuisines.join(", ")}</h5>
        </div>
        
    )
}

export default CardLayout