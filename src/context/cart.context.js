import { createContext } from "react";
import { useRecoilState } from "recoil";
import { cartAtom } from "../atoms/cart.atom";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useRecoilState(cartAtom);

  const addToCart = (product) => {
    const { title, price, imageUrl } = product;
    const exists = cart.findIndex(x => x.title === title);

    if (exists >= 0) {
      setCart(cart.map((item, i) => (
        i === exists ? ({
          title,
          price,
          imageUrl,
          quantity: parseInt(item.quantity) + 1
        }) : item
      )))
    } else {
      setCart([...cart, { title, price, imageUrl, quantity: 1 }])
    }
  }

  const removeItem = (title) => {
    setCart(
      cart.filter(x => x.title !== title)
    )
  }

  const increaseQuantity = (product) => {
    const { title, price, imageUrl } = product;
    const exists = cart.findIndex(x => x.title === title);

    setCart(cart.map((item, i) => (
      i === exists ? ({
        title,
        price,
        imageUrl,
        quantity: parseInt(item.quantity) + 1
      }) : item
    )))
  }

  const totalPrice = cart.reduce(function(a, b) {
    return a + (b.quantity * b.price);
}, 0);

  const decreaseQuantity = (product) => {
    const { title, price, imageUrl } = product;
    const exists = cart.findIndex(x => x.title === title);

    if (product.quantity - 1 > 0) {
      setCart(cart.map((item, i) => (
        i === exists ? ({
          title,
          price,
          imageUrl,
          quantity: parseInt(item.quantity) - 1
        }) : item
      )))
    } else {
      removeItem(title);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  )
}