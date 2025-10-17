import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lips from "./pages/Lips";
import Eyes from "./pages/Eyes";
import Brows from "./pages/Brows";
import Face from "./pages/Face";
import Hair from "./pages/Hair";
import Skincare from "./pages/Skincare";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Si no hay ruta, renderiza Lips */}
        <Route path="*" element={<Lips />} />
        <Route path="/lips" element={<Lips />} />
        <Route path="/eyes" element={<Eyes />} />
        <Route path="/brows" element={<Brows />} />
        <Route path="/face" element={<Face />} />
        <Route path="/hair" element={<Hair />} />
        <Route path="/skincare" element={<Skincare />} />
      </Routes>
    </Router>
  );
}