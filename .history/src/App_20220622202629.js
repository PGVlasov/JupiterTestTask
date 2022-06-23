import { BrowserRouter, Routes, Route } from "react-router-dom";
import classes from "./App.module.css";
import { Navbar } from "./components/Navbar";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <div className={classes["app"]}>
        <Navbar />
        <div className={classes["app"]}></div>
        <Routes>
          <Route element={<MainPage />} path="/" />
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
