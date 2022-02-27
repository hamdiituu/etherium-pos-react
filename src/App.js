import { NavBar } from "./components";
import { PosPage, ProductPanelPage, NotFoundPage } from "./pages";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/pos" element={<PosPage />} />
        <Route path="/panel/urun" element={<ProductPanelPage />} />
        <Route path="/bilinmeyen-sayfa" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to={"/bilinmeyen-sayfa"} />} />
      </Routes>
    </>
  );
}

export default App;
