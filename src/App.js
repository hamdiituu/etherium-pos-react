import { NavBar, PanelLayout } from "./components";
import {
  PosPage,
  ProductPanelPage,
  NotFoundPage,
  DashboardPanelPage,
  ContractTestPage,
  ContractTestHookPage,
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
            element={
              <PanelLayout>
                <DashboardPanelPage />
              </PanelLayout>
            }
          />
          <Route
            path="/panel/urun"
            element={
              <PanelLayout>
                <ProductPanelPage />
              </PanelLayout>
            }
          />
          <Route path="/contract-test" element={<ContractTestPage />} />
          <Route
            path="/contract-test-hook"
            element={<ContractTestHookPage />}
          />
          <Route path="/bilinmeyen-sayfa" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to={"/bilinmeyen-sayfa"} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
