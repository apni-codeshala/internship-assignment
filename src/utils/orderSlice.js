import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        items: []
    },
    // We can modify order slice by reducer function
    reducers: {
        orderItem: (state, action) => {
            state.items.push(action.payload);
        },
        clearOrders: (state) => {
            state.items = [];
        },
        cancelOrder: (state, action) => {
            // Write logic here to remove single order item
            const itemToRemove = action.payload.item.card.info.id;
            state.items = [
                ...state.items.filter(item => item.item.card.info.id !== itemToRemove)
            ]
        }
    }
});

export default orderSlice.reducer;
export const {orderItem, clearOrders, cancelOrder} = orderSlice.actions;