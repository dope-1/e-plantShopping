import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    totalQuantity: 0,
    totalCost: 0,
  },
  reducers: {
    addItem: (state, action) => {
         const { name, image, cost } = action.payload;
         const existingItem = state.items.find(item => item.name === name);
         if (existingItem) {
          existingItem.quantity++;
        } else {
        state.items.push({ name, image, cost, quantity: 1 });
         }
         state.totalQuantity += 1;
         state.totalCost = state.items.reduce((total, item) => total + item.quantity * item.cost, 0);
    
    },
    removeItem: (state, action) => {
        const item = state.items.find((item) => item.name === action.payload.name);
        if (item) {
          state.totalQuantity -= item.quantity;
        }
        state.items = state.items.filter((item) => item.name !== action.payload.name);
        state.totalCost = state.items.reduce((total, item) => total + item.quantity * item.cost, 0);
    },
    updateQuantity: (state, action) => {

        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
         state.totalQuantity += quantity - item.quantity;
         itemToUpdate.quantity = quantity;
         }
         state.totalCost = state.items.reduce((total, item) => total + item.quantity * item.cost, 0);
  },
},
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
