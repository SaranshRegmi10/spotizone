import { configureStore } from "@reduxjs/toolkit";
import { CartSystem } from "../Cart/CartSlice";


const store = configureStore ({
    reducer: { 
        name : CartSystem
     },
})

export default store;