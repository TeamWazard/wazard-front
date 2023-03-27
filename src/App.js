import "./App.scss";
import "./pages/Login.scss";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpTest from "./pages/SignUpTest";
import SignUpChoose from "./pages/SignUpChoose";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signupchoose" element={<SignUpChoose />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
