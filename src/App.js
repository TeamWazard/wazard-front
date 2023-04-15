import "./App.scss";
import "./pages/main/Login.scss";
import Login from "./pages/main/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpChoose from "./pages/main/SignUpChoose";
import ButtonChoose from "./pages/main/ButtonChoose";
import CeoMain from "./pages/main/CeoMain";
import CeoMain2 from "./pages/main/CeoMain2";
import CeoMain3 from "./pages/main/CeoMain3";
import CeoMain4 from "./pages/main/CeoMain4";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<SignUpChoose />} />
          <Route path="/buttonChoose" element={<ButtonChoose />} />
          <Route path="/ceomain" element={<CeoMain />} />
          <Route path="/ceomain2" element={<CeoMain2 />} />
          <Route path="/ceomain3" element={<CeoMain3 />} />
          <Route path="/ceomain4" element={<CeoMain4 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
