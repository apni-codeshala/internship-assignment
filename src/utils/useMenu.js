import { useState, useEffect } from "react";
import { MENU_DATA, MENU_API, RESTAURANT_DATA} from "../components/constant";

const useMenu = (resId) => {

    const [restaurant, setRestaurant] = useState([]);
    const [menu, setMenu] = useState([])

    async function getRestaurantInfo(){
        try {
            // const data = await fetch(MENU_API + resId);
            // const json = await data.json();
            setRestaurant(MENU_DATA[2]?.card?.card?.info);
            setMenu(MENU_DATA[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);    
        } catch (error) {
            console.log('Error in fetching the restaurants :', error);
        }
    }

    useEffect(() => {
        getRestaurantInfo()
    }, []);

    return [restaurant, menu];

}

export default useMenu;