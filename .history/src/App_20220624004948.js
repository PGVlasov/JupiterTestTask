import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.scss";
import { Header } from "./components/header/Header";
import { Contacts } from "./pages/Contacts";
import { InDevelopment } from "./pages/InDevelopment";
import { MainPage } from "./pages/MainPage";
import { NotFound404 } from "./pages/NotFound";
import { BrandingPage } from "./pages/selected-pages/brandingPage";
import { DesignPage } from "./pages/selected-pages/DesignPage";
import { IllustrationPage } from "./pages/selected-pages/IllustrationPage";
import { MotionPage } from "./pages/selected-pages/MotionPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app-body">
        <Header />
      </div>
      <div className="app">
        <Routes>
          <Route element={<MainPage />} path="/" />
          <Route element={<BrandingPage />} path="/" />
          <Route element={<DesignPage />} path="/" />
          <Route element={<IllustrationPage />} path="/" />
          <Route element={<MotionPage />} path="/" />
          <Route element={<InDevelopment />} path="/notReady" />
          <Route element={<Contacts />} path="/contacts" />
          <Route element={<NotFound404 />} path="*" />
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
