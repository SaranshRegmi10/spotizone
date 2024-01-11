import { createSlice } from "@reduxjs/toolkit";
import Productcard from "../Product-id";

const initialState = { 
    cart:[],
    totalQunatity:0,
    totalPrice:0
};

export const CartSystem= createSlice({
    name:'cart',
    initialState,
    reducers:{
        AddCart:(state,action)=>{
           state.cart.push(action.payload)
       }
    }
        
    ,
});

export const {AddCart} = CartSystem .actions;
export default CartSystem.reducer;