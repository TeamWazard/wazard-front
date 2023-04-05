import "./App.scss";
import "./pages/main/Login.scss";
import Login from "./pages/main/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpChoose from "./pages/main/SignUpChoose";
import ButtonChoose from "./pages/main/ButtonChoose";
import CompanyList from "./pages/company/companyList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<SignUpChoose />} />
          <Route path="/buttonChoose" element={<ButtonChoose />} />
          <Route path="/company_list" element={<CompanyList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
