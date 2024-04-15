import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Applications from "./components/Applications";
import Dashboard from "./pages/Dashboard";
import Queries from "./components/Queries";
import FAQs from "./components/FAQs";
import Profile from "./pages/Profile";
import AIP from "./components/AIP";
import QR from "./components/QR";
import AC from "./components/AC";
import Apply from "./pages/Apply";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import Admin_home from "./pages/AdminPages/Admin_home";
import AdminDashboard from "./components/AdminDashboard";
import PrivateRoutes from "./components/PrivateRoutes";
import AdminSignin from "./pages/AdminPages/AdminSignin";
import AdminSignup from "./pages/AdminPages/AdminSignup";
import PrivateRoutesAdmin from "./components/PrivateRoutesAdmin";
import AppnRejected from "./components/AdminComponents/AppnRejected";
import AppnApproved from "./components/AdminComponents/AppnApproved";
import AppnPending from "./components/AdminComponents/AppnPending";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import AdminQueries from "./pages/AdminPages/AdminQueries";
function App() {
  const { currentUser } = useSelector((state) => state.user);

 
  return (
    <BrowserRouter>
      <Routes>
        {/* admin  routes */}
        <Route element={<PrivateRoutesAdmin />}>
          <Route path="/admin" element={<Admin_home />}>
            <Route path="Queries" element={<AdminQueries />} />
            <Route
              path="/admin/AdminDashboard"
              element={<Dashboard admin={true} />}
            >
              <Route index element={<AppnPending />} />
              <Route path="Application-pending" element={<AppnPending />} />
              <Route path="Application-approved" element={<AppnApproved />} />
              <Route path="Application-rejected" element={<AppnRejected />} />
            </Route>
          </Route>
        </Route>
        {/* Auth routes */}
        <Route path="/" element={<Register />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/admin-signin" element={<AdminSignin />}></Route>
        <Route path="/admin-signup" element={<AdminSignup />}></Route>
        {/* user or universal routes */}
        <Route path="/" element={<Home />}>
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<AIP />} />
              <Route path="Applications-in-progress" element={<AIP />} />
              <Route path="Application-completed" element={<AC />} />
              <Route path="Queries-raised" element={<QR />} />
            </Route>
            <Route path="/queries" element={<Queries />} />
            <Route path="/FAQs" element={<FAQs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Applications" element={<Applications />} />
            <Route path="/logout" />
          </Route>
        </Route>
        <Route path="/Applications/apply" element={<Apply />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
