import { createContext, useContext, useReducer } from "react";
import {reducer} from './Reducer'

const Cart = createContext();

const Context = ({children})=>{

    const [state , dispatch] = useReducer(reducer ,{
        cart : [] ,
    } )

    return(
        <Cart.Provider value={{state , dispatch}}>
            {children}
        </Cart.Provider>
    )
}

export const CartStore = () =>{
    return useContext(Cart);
}


export default Context