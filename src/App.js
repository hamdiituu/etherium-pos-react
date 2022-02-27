import { NavBar, PanelLayout } from "./components";
import {
  PosPage,
  ProductPanelPage,
  NotFoundPage,
  DashboardPanelPage,
} from "./pages";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <Routes>
          <Route path="/pos" element={<PosPage />} />
          <Route
            path="/panel"
            element={<PanelLayout childern={<DashboardPanelPage />} />}
          />
          <Route path="/panel/urun" element={<ProductPanelPage />} />
          <Route path="/bilinmeyen-sayfa" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to={"/bilinmeyen-sayfa"} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
