import "./App.scss";
import "./pages/main/Login.scss";
import Login from "./pages/main/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpChoose from "./pages/main/SignUpChoose";
import ButtonChoose from "./pages/main/ButtonChoose";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<SignUpChoose />} />
          <Route path="/buttonChoose" element={<ButtonChoose />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
