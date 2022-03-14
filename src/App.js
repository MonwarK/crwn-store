import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shoppage.component";

function App() {
  return (
    <div className="overflow-hidden">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
