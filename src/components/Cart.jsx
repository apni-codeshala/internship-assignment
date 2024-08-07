import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { orderItem } from "../utils/orderSlice";

import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);
    const orderedItem = useSelector(store => store.order.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }


    console.log(cartItems.length)

    const placeOrder = () => {
        alert("Place Order")
        for(let i=0; i<cartItems.length; i++) {
            dispatch(orderItem(cartItems[i]));
        }
        dispatch(clearCart());
    }

    return (
        <div className="flex flex-col justify-center mt-10 py-10 px-28 align-center" style={{ backgroundColor: '#3d3d3d' }}>
            <h1 className="text-3xl text-white py-10 font-bold underline">Cart Items</h1>
            {
                (cartItems.length == 0) ? (
                    <p className="text-white text-xl">Cart is empty click on see items to add food to cart</p>
                ) : (
                    cartItems.map((item, index) => {
                        return <CartItem item={item.item} quantity={item.quantity} key={index} />
                    })
                )
            }
            {
                (cartItems.length != 0) ? (
                    <div className="flex justify-center">
                        <button
                            className="w-[140px] border h-[35px] text-white bg-sky-500 rounded mx-3 my-10 py-1 hover:bg-sky-800 font-bold"
                            onClick={() => {
                                handleClearCart();
                            }}
                        >Empty cart</button>
                        <button
                            className="w-[140px] border h-[35px] text-white bg-red-500 rounded my-10 py-1 px-6 hover:bg-red-800 font-bold"
                            onClick={() => {
                                placeOrder();
                            }}
                        >
                            Place Order
                        </button>
                    </div>
                ) : (
                    <NavLink
                        to={"/"}
                        className="w-[80px] px-1 border h-[35px] text-white bg-sky-500 rounded mx-auto py-1 hover:bg-sky-800"
                    >
                        <button>See items</button>
                    </NavLink>
                )
            }
        </div>

    )
}

export default Cart;