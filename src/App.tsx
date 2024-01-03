import { Route, Routes } from "react-router-dom";
import WelcomePage from "../src/Pages/Welcomepage";
import MainInterface from "./Pages/Logbook/MainInterface";
import Heade from "../src/Components/Nav/Head.jsx";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <section className="nav-section  sticky top-0 z-50"></section>
      <Heade />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/logbook" element={<MainInterface />} />
      </Routes>

      <section className="footer-section  bg-secondary_black h-[fixed] p-3"></section>
    </div>
  );
}

export default App;
