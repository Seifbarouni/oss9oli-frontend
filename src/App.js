import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import green_blob2 from "./assets/svgs/green_blob2.svg";
import red_blob2 from "./assets/svgs/red_blob2.svg";
import orange_blob2 from "./assets/svgs/orange_blob2.svg";
import g_acc from "./assets/svgs/g_acc.svg";
import o_acc from "./assets/svgs/o_acc.svg";
import y_acc from "./assets/svgs/y_acc.svg";
import g_form from "./assets/svgs/g_form.svg";
import { AuthPage } from "./pages/AuthPage";
import { CommunityPage } from "./pages/CommunityPage";

import { EditChannelPage } from "./pages/EditChannelPage";
import { HomePage } from "./pages/HomePage";
import { LandingPage } from "./pages/LandingPage";
import { MyChannelPage } from "./pages/MyChannelPage";
import { PacksPage } from "./pages/PacksPage";
import { ProfilePage } from "./pages/ProfilePage";
import { AddPodcastPage } from "./pages/AddPodcastPage";
import { useAudio, useOpen } from "./store/store";
import { useCookies } from "react-cookie";
import { decode } from "./jwt/jwt";

import { FacebookAuth } from "./pages/FacebookAuth";
import { GoogleAuth } from "./pages/GoogleAuth";
import { AudioBar } from "./components/AudioBar";
import { ChannelPage } from "./pages/ChannelPage";
import { EpisodePage } from "./pages/EpisodePage";

function App() {
  const close = useOpen((state) => state.close);
  const isAudioBarOpen = useAudio((state) => state.isOpen);
  const [cookies, setCookie] = useCookies(["oss9oli"]);
  const { pack } = decode(cookies.oss9oli);
  useEffect(() => {
    // If screen is medium or smaller, open the menu.
    if (window.innerWidth <= 1250) {
      close();
    }
  }, [close]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-gris2 -z-50 md:px-0 px-0.5">
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
            path="/profile"
            element={
              <div className="bg-gris2  relative">
                {pack === "community_pack" && (
                  <div className="absolute  bottom-0 left-0">
                    <img src={green_blob2} alt="" className="" />
                  </div>
                )}
                {pack === "producer_pack" && (
                  <div className="absolute  bottom-0 left-0">
                    <img src={orange_blob2} alt="" className="" />
                  </div>
                )}
                {pack === "free" && (
                  <div className="absolute  bottom-0 left-0">
                    <img src={red_blob2} alt="" className="" />
                  </div>
                )}
                <ProfilePage />
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
            path="/accueil"
            element={
              <div className="bg-gris2  relative">
                <div className="absolute  top-0 right-0">
                  <img src={g_acc} alt="" className="" />
                </div>
                <div className="absolute  bottom-0 left-0">
                  <img src={o_acc} alt="" className="" />
                </div>
                <div className="absolute  bottom-0 right-0">
                  <img src={y_acc} alt="" className="" />
                </div>
                <HomePage />
              </div>
            }
          />
          <Route
            path="/mypods"
            element={
              <div className="bg-gris2  relative">
                <MyChannelPage />
              </div>
            }
          />
          <Route
            path="/addpod"
            element={
              <div className="bg-gris2  relative">
                <div className="absolute  top-0 left-0 z-10 ">
                  <img src={g_form} alt="" className="" />
                </div>
                <AddPodcastPage />
              </div>
            }
          />
          <Route
            path="/edit"
            element={
              <div className="bg-gris2  relative">
                <EditChannelPage />
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
          <Route
            path="/channel/:id"
            element={
              <div className="bg-gris2 -z-50">
                <ChannelPage />
              </div>
            }
          />
          <Route
            path="/episode/:id"
            element={
              <div className="bg-gris2 -z-50">
                <EpisodePage />
              </div>
            }
          />
        </Routes>
        {isAudioBarOpen && <AudioBar />}
      </BrowserRouter>
    </div>
  );
}

export default App;
