import { configureStore } from "@reduxjs/toolkit";
import productReucer from "../slice/productSlice"

export const strore = configureStore({
    reducer : {
        product : productReucer
    }
})