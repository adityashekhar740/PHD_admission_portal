import React, { useEffect, useState } from "react";
import axios from "axios";
import AppnCard from "./AppnCard";
import AppnModal from "./AppnModal";
function AppPending() {
  const [selected, setSelected] = useState("PHD");
  const [apps,setApps]=useState([]);
  useEffect(() => {
    const fetch_data = async () => {
      try {
        const res = await axios.get("/api/admin/application/getAll");
        console.log(res);
        setApps(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetch_data();
  }, []);
  return (
    <div className="flex flex-col gap-4 overflow-hidden ">
      <div>
        <h1>
          Filters:{" "}
          <span className="bg-[#65af41] py-[1.2px] px-1 rounded-sm text-white ">
            {selected}
          </span>{" "}
        </h1>{" "}
      </div>
     {
      apps?apps.map((app)=>(
         <AppnCard app={app} />
      )):null
     }
    </div>
  );
}

export default AppPending;
