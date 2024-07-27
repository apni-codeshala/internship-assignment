import { useSelector, useDispatch } from "react-redux";
import { clearOrders } from "../utils/orderSlice";

import OrderItems from './OrderItems';
import { NavLink } from "react-router-dom";

const Orders = () => {

    const orderItems = useSelector(store => store.order.items);

    const dispatch = useDispatch();

    const handleClearOrder = () => { 
        dispatch(clearOrders()) 
    }

    return (
        <div className="flex flex-col justify-center mt-10 py-10 px-28 align-center" style={{ backgroundColor: '#3d3d3d' }}>
            <h1 className="text-3xl text-white py-10 font-bold underline">Ordered Items</h1>
            {
                (orderItems.length == 0) ? (
                    <p className="text-white text-xl">No order made, click on see items to add food to cart</p>
                ) : (
                    orderItems.map((item, index) => {
                        return <OrderItems item={item.item} quantity={item.quantity} key={index} />
                    })
                )
            }
            {
                (orderItems.length != 0) ? (
                    <div className="flex justify-center">
                        <button
                            className="w-[240px] border h-[35px] text-white bg-red-500 rounded mx-3 my-10 py-1 hover:bg-red-800 font-bold"
                            onClick={() => {
                                handleClearOrder();
                            }}
                        >Cancel Order For All Items</button>
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
};

export default Orders;