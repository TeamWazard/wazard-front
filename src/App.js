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
import CompanyInvite from "pages/company/inCompany/CompanyInvite";
import CompanyContractEdit from "pages/company/inCompany/CompanyContractEdit";
import CompanyContractEditCheck from "pages/company/inCompany/CompanyContractEditCheck";
import CompanyAlba from "pages/company/inCompany/CompanyAlba";
import CompanyQR from "pages/company/inCompany/CompanyQR";
import AlbaList from "pages/alba/AlbaListPage";

import AlbaMainTest from "pages/main/AlbaMainTest";
import AlbaTest1 from "pages/main/AlbaTest1";
import AlbaTest2 from "pages/main/AlbaTest2";
import AlbaTest3 from "pages/main/AlbaTest3";
import AlbaInvitePage from "pages/alba/AlbaInvitedPage";
import ScrollToTop from "components/ScrollToTop";
import AlbaContract from "pages/alba/inAlba/AlbaContract";
import MyPageAlbaRecord from "pages/alba/MyPageAlbaRecord";
import AlbaMainPage from "pages/alba/inAlba/AlbaMainPage";
import AlbaAttendance from "pages/alba/inAlba/AlbaAttendance";
import AlbaReplace from "pages/alba/inAlba/AlbaReplace";
import MyPageAlbaRecordCheck from "pages/alba/MyPageAlbaRecordCheck";
import MyPageCertification from "pages/main/MyPageCertification";
import MyPageEdit from "pages/main/MyPageEdit";
import CompanyInviteContract from "pages/company/inCompany/CompanyInviteContract";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
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
              path="/company_main/:id/alba_list/:alba_id"
              element={<CompanyAlba />}
            />

            <Route
              path="/company_main/:id/alba_salary"
              element={<CompanyAlbaSalary />}
            />

            <Route
              path="/company_main/:id/alba_list/contract/:id"
              element={<CompanyContractEdit />}
            ></Route>
            <Route
              path="/company_main/:id/alba_list/contract/:id/check"
              element={<CompanyContractEditCheck />}
            ></Route>

            <Route
              path="/company_main/:id/invite"
              element={<CompanyInvite />}
            ></Route>
            <Route
              path="/company_main/:id/invite/:id"
              element={<CompanyInviteContract />}
            ></Route>

            <Route path="/company_main/:id/qr" element={<CompanyQR />}></Route>

            <Route path="/albamaintest" element={<AlbaMainTest />} />
            <Route path="/albatest1" element={<AlbaTest1 />} />
            <Route path="/albatest2" element={<AlbaTest2 />} />
            <Route path="/albatest3" element={<AlbaTest3 />} />

            <Route path="/alba_main/:id" element={<AlbaMainPage />} />

            <Route
              path="/alba_main/:id/attendance"
              element={<AlbaAttendance />}
            ></Route>

            {/* 알바생화면 */}
            <Route path="/alba_list" element={<AlbaList />} />
            <Route path="/alba_invited" element={<AlbaInvitePage />} />
            <Route path="/alba_main/:id/contract" element={<AlbaContract />} />
            <Route path="/alba_main/:id/replace" element={<AlbaReplace />} />
            <Route path="/alba_record" element={<MyPageAlbaRecord />} />
            <Route
              path="/alba_record/:id"
              element={<MyPageAlbaRecordCheck />}
            />

            {/* 마이페이지 */}
            <Route
              path="/my_account/password"
              element={<MyPageCertification />}
            />
            <Route path="/my_account/edit" element={<MyPageEdit />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
