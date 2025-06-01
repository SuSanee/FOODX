import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MdStars} from "react-icons/md";
import useRestaurantMenu from "../utilies/useRestaurantMenu";
import useOnlineStatus from "../utilies/useOnlineStatus";

const ResMenu = () => {
    const {resId} = useParams()
    const resMenu = useRestaurantMenu(resId);

    if(resMenu == null) return <Shimmer/>

    console.log(resMenu)
    const {name, cuisines, costForTwoMessage, areaName, avgRating} = resMenu?.data?.cards[2]?.card?.card?.info;

    const menuCard = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card?.card;

    const itemCards = menuCard?.categories?.length>0 ? menuCard?.categories[0]?.itemCards : menuCard?.itemCards;

    console.log(itemCards)


    return (
        <div className="bg resCard">
            <div className="res-name">
                <h1>{name}</h1>
            </div>
            <div className="res-text menu-boxes-layout">
                <div className="rating">
                    <MdStars color="green" size={20}/>
                    <h4>{avgRating} • {costForTwoMessage}</h4>
                </div>
                
                <h4 className="cuisine">{cuisines.join(", ")}</h4>
                <h4>{areaName}</h4>
            </div>
            <div className="menu-text">
                <h3>--•MENU•--</h3>
            </div>
            <div className="menu-sec">
                <div>

                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
            </div>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}</li>)}
            </ul>
            {/* <div className="recommended">
                
            </div> */}
        </div>
    )  
}

export default ResMenu;