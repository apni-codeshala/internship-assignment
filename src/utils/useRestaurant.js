import { useState, useEffect } from "react";
import { RESTAURANT_DATA, SEARCH_RESTAURANT } from "../components/constant.js";

const useRestaurant = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    async function getRestaurnats() {
        try {
            // const data = await fetch(SEARCH_RESTAURANT)
            // const json = await data.json();
            // Optional chaining
            setAllRestaurants(RESTAURANT_DATA.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]?.card?.card?.restaurants);
            setFilteredRestaurants(RESTAURANT_DATA.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]?.card?.card?.restaurants);
        } catch (error) {
            console.log('Error in fetching the restaurants :', error);
        }
    }

    useEffect(() => {
        // API call
        setTimeout(() => {
            getRestaurnats();
        }, 450);
    }, []);

    return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
}

export default useRestaurant;