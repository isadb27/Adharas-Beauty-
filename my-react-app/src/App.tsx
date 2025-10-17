import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lips from "./pages/Lips";
import Eyes from "./pages/Eyes";
import Brows from "./pages/Brows";
import Face from "./pages/Face";
import Hair from "./pages/Hair";
import Skincare from "./pages/Skincare";
import ProductDetail from "./pages/ProductDetail"; 

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Lips />} />
        <Route path="/lips" element={<Lips />} />
        <Route path="/eyes" element={<Eyes />} />
        <Route path="/brows" element={<Brows />} />
        <Route path="/face" element={<Face />} />
        <Route path="/hair" element={<Hair />} />
        <Route path="/skincare" element={<Skincare />} />
         <Route path="/product/:id" element={<ProductDetail />} /> 
      </Routes>
    </Router>
  );
}
