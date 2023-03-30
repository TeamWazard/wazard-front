import "./App.scss";
import "./pages/main/Login.scss";
import Login from "./pages/main/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpChoose from "./pages/main/SignUpChoose";

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
