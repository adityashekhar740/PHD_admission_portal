import {BrowserRouter, Route,Routes} from "react-router-dom";
import Home from './components/Home';
import Applications from "./components/Applications";
import Dashboard from "./components/Dashboard";
import Queries from "./components/Queries";
import FAQs from "./components/FAQs";
import Profile from "./components/Profile";

function App  () {


  return (
    // <div>{data && data}</div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/queries" element={<Queries/>} />
      <Route path="/FAQs" element={<FAQs/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/comingSoon"  />
      <Route path="/logout"  />
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default  App;