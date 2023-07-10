import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
