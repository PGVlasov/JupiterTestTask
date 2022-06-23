import { BrowserRouter, Routes, Route } from "react-router-dom";
import classes from "./App.module.css";
import "./app.scss";
import { Header } from "./components/header/Header";
import { Contacts } from "./pages/Contacts";
import { InDevelopment } from "./pages/InDevelopment";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Header />
      </div>
      <div className="app">
        <Routes>
          <Route element={<MainPage />} path="/" />
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
