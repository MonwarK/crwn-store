import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartHiddenAtom } from "./atoms/cart.atom";
import { userAtom } from "./atoms/user.atom";
import CartDropDown from "./components/cart-dropdown.component";
import Header from "./components/header.component";
import { CartContextProvider } from "./context/cart.context";
import AuthenticationPage from "./pages/authentication-page.component";
import CheckoutPage from "./pages/checkout-page.component";
import HomePage from "./pages/home-page.component";
import ShopPage from "./pages/shop-page.component";
import { auth } from "./utilities/firebase.utils";
import ContactPage from "./pages/contact-page.component";

function App() {
  const isCartHidden = useRecoilValue(cartHiddenAtom);
  const [user, setUser] = useRecoilState(userAtom);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      setUser(userAuth); 
    })
    
    return unsubscribe;
  }, [auth])
  
  return (
    <CartContextProvider>
      <div className="overflow-hidden bg-gray-100 flex flex-col min-h-screen pb-5">
        <Header user={user} />
        {!isCartHidden && <CartDropDown />}
        <div className="px-10 flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop/*" element={<ShopPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/signin" element={<AuthenticationPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </div>
      </div>
    </CartContextProvider>
  );
}

export default App;
