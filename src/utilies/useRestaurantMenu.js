import { useState, useEffect, use} from "react";
import { RES_MENU_URL } from "../utilies/constants";


const useRestaurantMenu = (resId) => {

    const [resMenu, setresMenu] = useState(null)

    useEffect (() => {
        resInfo();
    }, [])



    const resInfo = async() => {
        const data = await fetch(RES_MENU_URL + resId);
        const json = await data.json();

        setresMenu(json)   
    }

    return resMenu;
}

export default useRestaurantMenu