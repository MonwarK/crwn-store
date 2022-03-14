import { Route, Routes } from "react-router-dom";
import Header from "./components/header.component";
import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shoppage.component";

function App() {
  return (
    <div className="overflow-hidden bg-gray-100">
      <Header />
      <div className="px-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
