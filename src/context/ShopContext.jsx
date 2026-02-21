'use client'
import {createContext} from 'react'
import { products } from "@/assets/product";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '₦';
    const delivery_fee = 3000;
    const value = {
products, currency, delivery_fee
    }
    return (
        <ShopContext.Provider value={value}>

        </ShopContext.Provider>
    )

}
export default ShopContextProvider