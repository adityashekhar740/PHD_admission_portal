import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { AiOutlineFileDone } from "react-icons/ai";
import { MdOutlineDangerous } from "react-icons/md";
import { IoIosChatboxes } from "react-icons/io";
import { FaRegHourglassHalf } from "react-icons/fa6";



function Dashboard({ admin }) {
  const [selected, setselected] = useState("AIP");
  const [adminSelected, setAdminSelected] = useState("pending");
  return (
    <>
      {admin ? (
        <div className="bg-[#eaeaea] flex-1 p-4 flex flex-col gap-5 ">
          <div>
            <h1 className="text-2xl font-semibold ">Dashboard</h1>
            <p className="leading-7 text-[14px]">
              After making the payment if the amount is debited from your
              account and payment status is showing pending then hit the Make
              payment button once again to get the status updated and if still
              Payment Status is showing pending then write to us on Any Queries?
              Ask US displayed on your dashboards.
            </p>
          </div>
          <div className="w-full bg-[#656565] h-[1px] "></div>
          <div className="w-full flex gap-5 justify-evenly h-[85px] ">
            <NavLink
              to={"Application-pending"}
              onClick={() => setAdminSelected("pending")}
              className={`w-[28%] ${
                adminSelected === "pending"
                  ? "bg-[#e45c37] text-[white] "
                  : " text-[black] bg-[white]"
              }  flex justify-center items-center `}
            >
              Application(s) Pending{" "}
              <FaRegHourglassHalf className="ml-[46px] text-[35px]" />
            </NavLink>
            <NavLink
              to={"Application-approved"}
              onClick={() => setAdminSelected("approved")}
              className={`w-[28%] ${
                adminSelected === "approved"
                  ? "bg-[#e45c37] text-[white] "
                  : " text-[black] bg-[white]"
              } flex justify-center items-center  `}
            >
              Application(s) Approved{" "}
              <AiOutlineFileDone className="ml-[46px] text-[40px]" />
            </NavLink>
            <NavLink
              to={"Application-rejected"}
              onClick={() => setAdminSelected("rejected")}
              className={`w-[28%] ${
                adminSelected === "rejected"
                  ? "bg-[#e45c37] text-[white] "
                  : " text-[black] bg-[white]"
              } flex justify-center items-center  `}
            >
              Applications Rejected{" "}
              <MdOutlineDangerous className="ml-[46px] text-[40px]" />{" "}
            </NavLink>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      ) : (
        <div className="bg-[#eaeaea] flex-1 p-4 flex flex-col gap-5 ">
          <div>
            <h1 className="text-2xl font-semibold ">Dashboard</h1>
            <p className="leading-7 text-[14px]">
              After making the payment if the amount is debited from your
              account and payment status is showing pending then hit the Make
              payment button once again to get the status updated and if still
              Payment Status is showing pending then write to us on Any Queries?
              Ask US displayed on your dashboards.
            </p>
          </div>
          <div className="w-full bg-[#656565] h-[1px] "></div>
          <div className="w-full flex gap-5 justify-evenly h-[85px] ">
            <NavLink
              to={"Applications-in-progress"}
              onClick={() => setselected("AIP")}
              className={`w-[28%] ${
                selected === "AIP"
                  ? "bg-[#e45c37] text-[white] "
                  : " text-[black] bg-[white]"
              }  flex justify-center items-center `}
            >
              Application(s) In Progress{" "}
              <FaRegHourglassHalf className="ml-[46px] text-[35px]" />
            </NavLink>
            <NavLink
              to={"Application-completed"}
              onClick={() => setselected("AC")}
              className={`w-[28%] ${
                selected === "AC"
                  ? "bg-[#e45c37] text-[white] "
                  : " text-[black] bg-[white]"
              } flex justify-center items-center  `}
            >
              Application(s) Completed{" "}
              <AiOutlineFileDone className="ml-[46px] text-[40px]" />
            </NavLink>
            <NavLink
              to={"Queries-raised"}
              onClick={() => setselected("QR")}
              className={`w-[28%] ${
                selected === "QR"
                  ? "bg-[#e45c37] text-[white] "
                  : " text-[black] bg-[white]"
              } flex justify-center items-center  `}
            >
              Queries Raised{" "}
              <IoIosChatboxes className="ml-[46px] text-[40px]" />{" "}
            </NavLink>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
