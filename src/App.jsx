import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MyTown from "./pages/MyTown";

function App() {
  return (
    <BrowserRouter basename="/react-project">
      <Navbar />
      <Routes>
        {/* Default route goes to Home */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/mytown" element={<MyTown />} />
        {/* Redirect all unknown paths to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
