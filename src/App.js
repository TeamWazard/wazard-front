import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux-toolkit/store";
import SignUpChoose from "./pages/main/SignUpChoose";
import ButtonChoose from "./pages/main/ButtonChoose";
import CompanyList from "./pages/company/CompanyList";
import CompanyAdd from "./pages/company/CompanyAdd";
import CompanyEdit from "pages/company/CompanyEdit";
import CompanyMain from "./pages/company/inCompany/CompanyMain";
import Login from "./pages/main/Login";

import "./App.scss";
import "./pages/main/Login.scss";

import CeoMain from "./pages/main/CeoMain";
import CeoMain2 from "./pages/main/CeoMain2";

import CompanyAlbaList from "pages/company/inCompany/CompanyAlbaList";
import CompanyAlbaSalary from "pages/company/inCompany/CompanyAlbaSalary";

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
            <Route path="/company_add" element={<CompanyAdd />} />
            <Route path="/company_edit" element={<CompanyEdit />} />
            <Route path="/company_main/:id" element={<CompanyMain />} />

            <Route
              path="/company_main/:id/alba_list"
              element={<CompanyAlbaList />}
            />

            <Route
              path="/company_main/:id/alba_salary"
              element={<CompanyAlbaSalary />}
            />

            <Route path="/ceomain" element={<CeoMain />} />
            <Route path="/ceomain2" element={<CeoMain2 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
