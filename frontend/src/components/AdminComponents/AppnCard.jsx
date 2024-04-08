import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AppnModal from "./AppnModal";
import "./AdminCss.css";
function AppnCard({ app, AppnApproved,AppnRejected }) {
  const [modalOpen, setModelOpen] = useState(false);

  const handleClick = () => {
    setModelOpen((prev) => !prev);
    document.body.classList.toggle("modalOpen");
  };
  return (
    <>
      {AppnApproved ? (
        <div className="h-[75px] w-full flex bg-white rounded-sm border items-center   ">
          <div className="w-[4px] bg-[#e45c37] h-[100%]"></div>
          <div className="flex justify-between w-[90%] h-[100%]  items-center ">
            <div className="flex flex-col gap-1">
              <h1 className="text-[#666666] font-semibold  ml-3  h-[25%]  ">
                Applicant: {app.personalDetails.fullname}
              </h1>
              <p className="ml-3 text-[11.4px] ">
                Applied On: {app.date.split("T")[0]}
              </p>
            </div>
            <div className="flex  h-[100%] ">
              <div className="flex items-center px-7 border-solid border-x-[0.1px] border-gray-300 ">
                <h1 className="text-[#666666] ">
                  <span className=" font-semibold text-gray-500 ">
                    {app.status === "accepted" ? (
                      <h1 className="text-green-500">Approved ✅ </h1>
                    ) : (
                      "Pending..."
                    )}
                  </span>
                </h1>
              </div>
              <div className="flex items-center px-7 border-solid border-x-[0.1px] border-gray-300  ">
                <div>
                  <button
                    onClick={() => {
                      handleClick();
                    }}
                    className={`bg-[#65af41] text-[white] px-3 py-1 rounded-sm `}
                  >
                    View Application
                  </button>
                </div>
              </div>
            </div>
          </div>
          {modalOpen ? (
            <AppnModal app={app} setModelOpen={setModelOpen} />
          ) : null}
        </div>
      )
      : AppnRejected?
      <div className="h-[75px] w-full flex bg-white rounded-sm border items-center   ">
          <div className="w-[4px] bg-[#e45c37] h-[100%]"></div>
          <div className="flex justify-between w-[90%] h-[100%]  items-center ">
            <div className="flex flex-col gap-1">
              <h1 className="text-[#666666] font-semibold  ml-3  h-[25%]  ">
                Applicant: {app.personalDetails.fullname}
              </h1>
              <p className="ml-3 text-[11.4px] ">
                Applied On: {app.date.split("T")[0]}
              </p>
            </div>
            <div className="flex  h-[100%] ">
              <div className="flex items-center px-7 border-solid border-x-[0.1px] border-gray-300 ">
                <h1 className="text-[#666666] ">
                  <span className=" font-semibold text-gray-500 ">
                    {app.status === "rejected" ? (
                      <h1 className="text-red-500">Rejected ❌ </h1>
                    ) : (
                      "Pending..."
                    )}
                  </span>
                </h1>
              </div>
              <div className="flex items-center px-7 border-solid border-x-[0.1px] border-gray-300  ">
                <div>
                  <button
                    onClick={() => {
                      handleClick();
                    }}
                    className={`bg-[#65af41] text-[white] px-3 py-1 rounded-sm `}
                  >
                    View Application
                  </button>
                </div>
              </div>
            </div>
          </div>
          {modalOpen ? (
            <AppnModal app={app} setModelOpen={setModelOpen} />
          ) : null}
        </div>

      : (
        <div className="h-[75px] w-full flex bg-white rounded-sm border items-center   ">
          <div className="w-[4px] bg-[#e45c37] h-[100%]"></div>
          <div className="flex justify-between w-[90%] h-[100%]  items-center ">
            <div className="flex flex-col gap-1">
              <h1 className="text-[#666666] font-semibold  ml-3  h-[25%]  ">
                Applicant: {app.personalDetails.fullname}
              </h1>
              <p className="ml-3 text-[11.4px] ">
                Applied On: {app.date.split("T")[0]}
              </p>
            </div>
            <div className="flex  h-[100%] ">
              <div className="flex items-center px-7 border-solid border-x-[0.1px] border-gray-300 ">
                <h1 className="text-[#666666] ">
                  <span className=" font-semibold text-gray-500 ">
                    {app.status === "MFR" ? "📌Review..." : "Pending..."}
                  </span>
                </h1>
              </div>
              <div className="flex items-center px-7 border-solid border-x-[0.1px] border-gray-300  ">
                <div>
                  <button
                    onClick={() => {
                      handleClick();
                    }}
                    className={`bg-[#65af41] text-[white] px-3 py-1 rounded-sm `}
                  >
                    View Application
                  </button>
                </div>
              </div>
            </div>
          </div>
          {modalOpen ? (
            <AppnModal app={app} setModelOpen={setModelOpen} />
          ) : null}
        </div>
      )}
    </>
  );
}

export default AppnCard;
