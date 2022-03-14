import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header.component";
import AuthenticationPage from "./pages/authenticationpage.component";
import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shoppage.component";
import { auth } from "./utilities/firebase.utils";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, (userAuth) => {
        setUser(userAuth);
      })
    }

    return unsubscribe;
  }, [])
  
  return (
    <div className="overflow-hidden bg-gray-100 flex flex-col min-h-screen">
      <Header user={user} />
      <div className="px-10 flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<AuthenticationPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
