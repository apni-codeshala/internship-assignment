import { useState } from "react";

const OrderSituation = () => {

    const [range, setRange] = useState(35);

    // switch (situation) {
    //     case 'Order Placed':
    //         setRange(25);
    //         break;
    //     case 'Order Preparing':
    //         setRange(50)
    //         break;
    //     case 'Out for delivery':
    //         setRange(75);
    //         break;
    //     case 'Delivered':
    //         setRange(100);
    //         break;
    // }

    return (
        <div className="w-[100%] mt-5">
            <input type="range" value={range} className="w-[100%]"/>
            <div className="flex justify-between">
                <p className="text-white font-bold">Order Places</p>
                <p className="text-white font-bold">Order Preparing</p>
                <p className="text-white font-bold">Out for delivery</p>
                <p className="text-white font-bold">Delivered</p>
            </div>
        </div>
    )
}

export default OrderSituation;