import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot, query } from "firebase/firestore";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartHiddenAtom } from "./atoms/cart.atom";
import { userAtom } from "./atoms/user.atom";
import CartDropDown from "./components/cart-dropdown.component";
import Header from "./components/header.component";
import AuthenticationPage from "./pages/authentication-page.component";
import HomePage from "./pages/home-page.component";
import ShopPage from "./pages/shop-page.component";
import { auth, createUserProfileDocument, db } from "./utilities/firebase.utils";

function App() {
  const isCartHidden = useRecoilValue(cartHiddenAtom);
  const [user, setUser] = useRecoilState(userAtom);

  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, (userAuth) => {
        if (!userAuth) {
          setUser(null); 
          return;
        }
        const q = query(doc(db, "users", userAuth.uid));
        createUserProfileDocument(userAuth);
        
        onSnapshot(q, (snapshot) => {
          setUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        })
      })
    }
    
    return unsubscribe;
  }, [])
  
  return (
    <div className="overflow-hidden bg-gray-100 flex flex-col min-h-screen">
      <Header user={user} />
      {!isCartHidden && <CartDropDown />}
      <div className="px-10 flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route path="/signin" element={<AuthenticationPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
