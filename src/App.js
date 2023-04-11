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
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
