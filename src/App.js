import "./App.css";
import { QuienSoy } from "./pages/quiensoy";
import { Routes, Route, HashRouter } from "react-router-dom";
import { Portafolio } from "./pages/portafolio";
import { Habilidades } from "./pages/habilidades";

function App() {
  return (
    <div className="App" name="header">
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<QuienSoy />} exact={true} />
            <Route path="/port" element={<Portafolio />} />
            <Route path="/habilidades" element={<Habilidades />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
