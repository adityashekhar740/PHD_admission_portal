import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
function FormCard({ form, dashboard, AIP, AC }) {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  return (
    <>
    
      {dashboard ? (
        <div className="h-[75px] w-full flex bg-white rounded-sm border items-center   ">
          <div className="w-[4px] bg-[#e45c37] h-[100%]"></div>
          <div className="flex justify-between w-[90%] h-[100%]  items-center ">
            <h1 className="text-[#666666] font-semibold  ml-3  h-[25%]  ">
              PHD Application Form February 2024
            </h1>
            <div className="flex  h-[100%] ">
              <div className="flex items-center px-7 border-solid border-x-[0.1px] border-gray-300 ">
                <h1 className="text-[#666666] ">
                  {form.status === "pending" ? (
                    <span className=" font-semibold text-gray-600 ">
                      Application Under Process...
                    </span>
                  ) : form.status === "accepted" ? (
                    <span className=" font-semibold text-green-600 ">
                      Application Approved ✅
                    </span>
                  ) : form.status === "rejected" ? (
                    <span className=" font-semibold text-red-600 ">
                      Rejected ❌
                    </span>
                  ) : null}
                </h1>
              </div>
              <div className="flex items-center px-7 border-solid border-x-[0.1px] border-gray-300  ">
                <div>
                  <button
                    onClick={() => {
                      alert(form.status);
                    }}
                    className={`bg-[#65af41] text-[white] px-3 py-1 rounded-sm `}
                  >
                    View Status
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[75px] w-full flex bg-white rounded-sm border items-center   ">
          <div className="w-[4px] bg-[#e45c37] h-[100%]"></div>
          <div className="flex justify-between w-[90%] h-[100%]  items-center ">
            <h1 className="text-[#666666] font-semibold  ml-3  h-[25%]  ">
              PHD Application Form February 2024
            </h1>
            <div className="flex  h-[100%] ">
              <div className="flex items-center px-7 border-solid border-x-[0.1px] border-gray-300 ">
                {currentUser.formsApplied ? (
                  currentUser.formsApplied.includes("PHD001") ? (
                    <h1 className="text-[#666666] ">
                      <span className=" font-semibold text-green-600 ">
                        Already Applied
                      </span>
                    </h1>
                  ) : (
                    <h1 className="text-[#666666] ">
                      Fees:
                      <span className=" font-semibold text-red-500 ">
                        {" "}
                        ₹1000
                      </span>
                    </h1>
                  )
                ) : (
                  <h1 className="text-[#666666] ">
                    Fees:
                    <span className=" font-semibold text-red-500 "> ₹1000</span>
                  </h1>
                )}
              </div>
              <div className="flex items-center px-7 border-solid border-x-[0.1px] border-gray-300  ">
                <NavLink to={"/Applications/apply"}>
                  <button
                    disabled={
                      currentUser.formsApplied
                        ? currentUser.formsApplied.includes("PHD001")
                        : false
                    }
                    className={`bg-[#65af41] text-[white] px-3 py-1 rounded-sm `}
                  >
                    Apply Now
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FormCard;
