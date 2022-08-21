import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import green_blob2 from "./assets/svgs/green_blob2.svg";
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

import { FacebookAuth } from "./pages/FacebookAuth";
import { GoogleAuth } from "./pages/GoogleAuth";
import { AudioBar } from "./components/AudioBar";

function App() {
  const close = useOpen((state) => state.close);
  const isAudioBarOpen = useAudio((state) => state.isOpen);
  useEffect(() => {
    // If screen is medium or smaller, open the menu.
    if (window.innerWidth <= 1250) {
      close();
    }
  }, [close]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-gris2 -z-50 md:px-0 px-0.5">
              <LandingPage />
              {isAudioBarOpen && <AudioBar />}
            </div>
          }
        />
        <Route
          path="/packs"
          element={
            <div className="bg-gris2 -z-50">
              <PacksPage />
              {isAudioBarOpen && <AudioBar />}
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
              {isAudioBarOpen && <AudioBar />}
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <div className="bg-gris2  relative">
              <div className="absolute  bottom-0 left-0">
                <img src={green_blob2} alt="" className="" />
              </div>
              <ProfilePage />
              {isAudioBarOpen && <AudioBar />}
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
              {isAudioBarOpen && <AudioBar />}
            </div>
          }
        />
        <Route
          path="/mypods"
          element={
            <div className="bg-gris2  relative">
              <MyChannelPage />
              {isAudioBarOpen && <AudioBar />}
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
              {isAudioBarOpen && <AudioBar />}
            </div>
          }
        />
        <Route
          path="/edit"
          element={
            <div className="bg-gris2  relative">
              <EditChannelPage />
              {isAudioBarOpen && <AudioBar />}
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
