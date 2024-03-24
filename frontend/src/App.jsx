import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Applications from "./components/Applications";
import Dashboard from "./pages/Dashboard";
import Queries from "./components/Queries";
import FAQs from "./components/FAQs";
import Profile from "./components/Profile";
import AIP from "./components/AIP";
import QR from "./components/QR";
import AC from "./components/AC";
import Apply from "./pages/Apply";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import Admin_home from "./pages/Admin_home";
import Candi_Applications from "./components/Candi_Applications";

function App() {
  window.location.pathname === "/"
    ? (window.location.pathname = "/register")
    : null;
  console.log("heyyy");
  return (
    // <div>{data && data}</div>
    <BrowserRouter>
      <Routes>
         {/* admin  routes */}
        <Route path="/admin" element={<Admin_home/>}>
          <Route path="/admin/Candidate-Applications" element={<Candi_Applications/>} />
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/signin" element={<Signin />}></Route>

        <Route path="/" element={<Home />}>
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
        <Route path="/Applications/apply" element={<Apply />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
