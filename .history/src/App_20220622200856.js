import { BrowserRouter } from "react-router-dom";
import classes from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={classes["app"]}></div>;
    </BrowserRouter>
  );
}

export default App;
