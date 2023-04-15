import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux-toolkit/store";
import SignUpChoose from "./pages/main/SignUpChoose";
import ButtonChoose from "./pages/main/ButtonChoose";
import CompanyList from "./pages/company/CompanyList";
import CompanyEditor from "./pages/company/CompanyEditor";
import Login from "./pages/main/Login";

import "./App.scss";
import "./pages/main/Login.scss";

import CeoMain from "./pages/main/CeoMain";
import CeoMain2 from "./pages/main/CeoMain2";
import CeoMain3 from "./pages/main/CeoMain3";
import CeoMain4 from "./pages/main/CeoMain4";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/signup" element={<SignUpChoose />} />
            <Route path="/buttonChoose" element={<ButtonChoose />} />
            <Route path="/company_list" element={<CompanyList />} />
            <Route path="/company_editor" element={<CompanyEditor />} />

            <Route path="/ceomain" element={<CeoMain />} />
            <Route path="/ceomain2" element={<CeoMain2 />} />
            <Route path="/ceomain3" element={<CeoMain3 />} />
            <Route path="/ceomain4" element={<CeoMain4 />} />


          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
