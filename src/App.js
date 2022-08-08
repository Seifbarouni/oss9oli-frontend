import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { LandingPage } from "./pages/LandingPage";
import { PacksPage } from "./pages/PacksPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-gris2 -z-50">
              <LandingPage />
            </div>
          }
        />
        <Route
          path="/packs"
          element={
            <div className="bg-gris2 -z-50">
              <PacksPage />
            </div>
          }
        />
        <Route
          path="/auth"
          element={
            <div className="bg-gris2 -z-50">
              <AuthPage />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
