import React, { useEffect, useState } from "react";
import axios from "axios";
import AppnCard from "./AppnCard";
function AppnRejected() {
  const [selected, setSelected] = useState("PHD");
  const [cards,setCards]=useState([]);
  useEffect(() => {
    const fetch_data = async () => {
      try {
        const res = await axios.get("/api/admin/application/GetAllRejected");
        setCards(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetch_data();
  }, []);
  return (
    <div className="flex flex-col gap-4 ">
      <div>
        <h1>
          Filters:{" "}
          <span className="bg-[#65af41] py-[1.2px] px-1 rounded-sm text-white ">
            {selected}
          </span>{" "}
        </h1>{" "}
      </div>
      {
        cards?
        cards.map((app)=>(
          <AppnCard app={app} AppnRejected={AppnRejected} />
        ))
        :null
      }
    </div>
  );
}

export default AppnRejected;
