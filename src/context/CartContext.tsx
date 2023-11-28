import { ReactNode, createContext, useContext, useState , } from "react"

interface IcartContext {
    product : any | []
    addToCart : (cart:any) => void
     removeFromCart: (cart: any) => void;
}

const CartContext = createContext<IcartContext>({
    product : [],
    addToCart : () => {},
    removeFromCart: () => {}
})

interface IcartContextProvider {
    children : ReactNode;
}

export const CartContextProvider = ({children}: IcartContextProvider) => {
    const [ product , setProduct] = useState <any>([]);
    const addToCart  =(cart : any) => {
        setProduct((prevCart : any) => [...prevCart , cart])
    };
    const removeFromCart = (cartToRemove: any) => {
        setProduct((prevCart: any[]) =>
            prevCart.filter((item: any) => item.name !== cartToRemove.name)
        );
    };


    return (
        <CartContext.Provider value={{product , addToCart ,removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    const context = useContext(CartContext)
    return context
}