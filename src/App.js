import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admindashboard from "./components/admin-dashboard/admin-dashboard";
import Adddoctor from "./components/admin-dashboard/doctor/add-doctor";
import DoctorCommission from "./components/admin-dashboard/doctor/doctor-commission";
import DoctorList from "./components/admin-dashboard/doctor/doctor-list";
import TestDc from "./components/admin-dashboard/doctor/test-dc";
import Test from "./components/admin-dashboard/test/test-list";
import ForgotPassword from "./components/forgot-password";
import Login from "./components/login";
import PageNotFound from "./components/page_not_found";
import Registration from "./components/regstration";
import Terms from "./components/terms-and-condition";
import "./css/index.css";
import Home from "./pages/home";
import Sidebar from "./components/sidebar";
import Addtest from "./components/admin-dashboard/test/add-test";
import AddReport from "./components/admin-dashboard/report/add-report";
import ReportList from "./components/admin-dashboard/report/report-list";
import ReportTemplate from "./components/admin-dashboard/report/report-template";
import DownloadReport from "./components/admin-dashboard/report/download-report";
import {useState } from "react";
import ContactUs from "./components/contact-us";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  const currentPath = window.location.pathname;
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <div className={isDarkMode ? "dark-mode" : ""}>
          <div style={{ height: "100vh", width: "100vw", overflow: "hidden", display: "flex", flexDirection: "row" }}>
            {currentPath !== "/home" && currentPath !== "/" && (
              <div>
                <Sidebar toggleDarkMode={toggleDarkMode} />
              </div>
            )}
            <div style={{ width: "100%", overflow: "auto" }}>
              <Routes basename="/newfile">
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/terms-and-condition" element={<Terms />} />
                <Route path="*" element={<PageNotFound />} />

                {/* <Route path="/user" element={<Userroute/>} > */}
                <Route path="/user/dashboard" element={<Admindashboard />} />
                <Route path="/user/add-doctor" element={<Adddoctor />} />
                <Route path="/user/doctor-list" element={<DoctorList />} />
                <Route path="/user/test-dc" element={<TestDc />} />
                <Route path="/user/doctor-commission" element={<DoctorCommission />} />

                <Route path="/user/test-list" element={<Test />} />
                <Route path="/user/add-test" element={<Addtest />} />

                <Route path="/user/add-report" element={<AddReport />} />
                <Route path="/user/report-list" element={<ReportList />} />
                <Route path="/user/report-template" element={<ReportTemplate />} />
                <Route path="/user/download-report" element={<DownloadReport />} />

                <Route path="/user/contact-us" element={<ContactUs/>} />


                {/* </Route> */}

              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
