import { BrowserRouter, Routes } from "react-router-dom";
import classes from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={classes["app"]}>
        <Routes></Routes>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
