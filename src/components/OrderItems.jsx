import { useState } from "react";
import { useDispatch } from "react-redux";
import { cancelOrder } from "../utils/orderSlice.js";

import { CLOUDINARY_URL } from "./constant";
import veg from "../assets/veg.png";
import nonveg from "../assets/nonveg.png"
import OrderSituation from "./OrderSituation.jsx";

const OrderItems = ({ item, quantity, index}) => {

    const [qunatity] = useState(quantity);

    const dispatch = useDispatch();

    function removeFoodItem(item) {
        dispatch(cancelOrder({item}));
    }

    return (
        <div className="flex flex-row-reverse space-x-10 md:flex-row border-b border-gray-400 py-4">
            <div className="flex-shrink-0">
                <img src={CLOUDINARY_URL + item?.card?.info?.imageId} alt="Product image" className="w-56 h-30 object-cover" />
            </div>
            <div className="mt-4 ">
                <h2 className="text-lg font-2xl text-white font-bold">{item?.card?.info?.name}</h2>
                <p className="mt-2 text-white">{item?.card?.info?.description}</p>
                {
                    (item?.card?.info?.isVeg) ? (
                        <img src={veg} alt="Veg" className="w-[35px]" />
                    ) : (
                        <img src={nonveg} alt="Non Veg" className="w-[35px]" />
                    )
                }
                <span className="ml-auto font-bold text-white">Rs. {
                    (item?.card?.info?.price) ? (item?.card?.info?.price / 100) : (item?.card?.info?.defaultPrice / 100)
                }</span>
                <div className="mt-4 flex items-center">
                    <span className="mr-2 text-white">Quantity:</span>
                    <div className="flex items-center">
                        <span className="mx-2 text-white">{qunatity}</span>             
                        <button 
                            className="w-[240px] border h-[35px] text-black bg-red-200 rounded ml-5 py-1 hover:bg-red-800"
                            onClick={() => {
                                removeFoodItem(item, qunatity);
                            }}
                        >Remove this item from order</button>
                    </div>
                </div>
                <OrderSituation />
            </div>
        </div>
    );
}

export default OrderItems;
