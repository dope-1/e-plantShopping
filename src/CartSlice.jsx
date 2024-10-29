import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    
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
    
    },
    removeItem: (state, action) => {
        const item=action.payload;
        const existingitem = state.items.find((item) => item.name === action.payload.name);
        if (existingitem) {
            state.items=state.items.filter((i)=>i.name!==item.name);
        }
       
    },
    updateQuantity: (state, action) => {

        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        itemToUpdate.quantity = quantity;
        if (itemToUpdate.quantity==0) {
            state.items = state.items.filter((i) => i.name !== name);
         }
        
  },
},
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
