import { BrowserRouter, Routes, Route } from "react-router-dom";
import classes from "./App.module.css";
import "./app.scss";
import { Header } from "./components/Header/Navbar";

import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <div className="App">
        <Routes>
          <Route element={<MainPage />} path="/" />
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
