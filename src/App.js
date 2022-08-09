import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { LandingPage } from "./pages/LandingPage";
import { PacksPage } from "./pages/PacksPage";
import { CommunityPage } from "./pages/CommunityPage";
import { FacebookAuth } from "./pages/FacebookAuth";
import { GoogleAuth } from "./pages/GoogleAuth";

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
        <Route
          path="/community"
          element={
            <div className="bg-gris2 -z-50">
              <CommunityPage />
            </div>
          }
        />
        <Route
          path="/auth-facebook"
          element={
            <div className="bg-gris2 -z-50">
              <FacebookAuth />
            </div>
          }
        />
        <Route
          path="/auth-google"
          element={
            <div className="bg-gris2 -z-50">
              <GoogleAuth />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
