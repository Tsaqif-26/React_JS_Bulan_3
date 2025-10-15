import { createContext, useContext, useState } from "react";

export const CartContext = createContext()
export function CartProvider({children}) {

    const [cart, setCart] = useState([])

    const addCart = (i) => setCart((prev) => [...prev, i])

    const removeCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id))

    const clearCart = () => setCart([])

    const total = cart.reduce((sum, item) => sum + item.price, 0)

    return(

        <CartContext.Provider value={{cart,addCart,removeCart,clearCart,total}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("Error!");
  return context;
}