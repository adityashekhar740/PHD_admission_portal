import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Apply.css";
import { IoMdArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";

function Apply() {
  const [personalDetailDone, setpersonalDetailDone] = useState(false);
  const [ParentDetailDone, setParentDetailDone] = useState(false);
  const [addressDetailDone, setAddressDetailDone] = useState(false);
  const [declarationDone, setDeclarationDone] = useState(false);
  const [percentDone, setpercentDone] = useState(0);
  const archPrograms = ["select", "PHD Plan", "PHD March Landscapes"];
  const BasicSciencesPrograms = [
    "select",
    "PHD in Biotechnology ",
    "PHD in Chemistry ",
    "PHD in Mathematics ",
    "PHD in physics ",
  ];
  const CompApplicationsPrograms = ["select", "PHD in COmputer Applications"];
  const EngineeringPrograms = [
    "select",
    "PHD in Data Science ",
    "PHD in Artificial Intelligence Machine Learning  ",
    "PHD in Cloud Computing ",
    "PHD in Cyber Security ",
    "PHD in Blockchain ",
    "PHD in Computer & IOT ",
  ];
  const [formData, setFormData] = useState({
    personalDetails: {
      discipline: "",
      stream: "",
      program: "",
      title: "",
      firstname: "",
      middlename: "",
      lastname: "",
      email: "",
      Mobile: 0,
      dob: "",
      gender: "",
      nationality: "",
      caste: "",
    },
    parentDetails: {
      Ftitle: "",
      Fname: "",
      Fmobile: 0,
      Fmail: "",
      Mtitle: "",
      Mname: "",
      Mmobile: 0,
      Mmail: "",
    },
    addressDetails: {
      address: "",
      isPermanentAddress: "",
    },
    declaration: "",
  });
  const handleChange = (e) => {
    if (e.target.id === "noPermanent" || e.target.id === "yesPermanent") {
      setFormData({
        ...formData,
        addressDetails: {
          ...formData.addressDetails,
          isPermanentAddress: e.target.id,
        },
      });
    } else {
      setFormData({
        ...formData,
        personalDetails: {
          ...formData.personalDetails,
          [e.target.id]: e.target.value,
        },
      });
    }
  };
  const handleChange2 = (e) => {
    setFormData({
      ...formData,
      parentDetails: {
        ...formData.parentDetails,
        [e.target.id]: e.target.value,
      },
    });
  };
  const handleChange3 = (e) => {
    if (e.target.id === "noPermanent" || e.target.id === "yesPermanent") {
      setFormData({
        ...formData,
        addressDetails: {
          ...formData.addressDetails,
          isPermanentAddress: e.target.id,
        },
      });
    } else {
      setFormData({
        ...formData,
        addressDetails: {
          ...formData.addressDetails,
          [e.target.id]: e.target.value,
        },
      });
    }
  };

  const handleChange4 = (e) => {
    setFormData({ ...formData, declaration: e.target.checked });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <>
      <Navbar />
      <div className="bg-[#eaeaea] h-[222vh] ">
        <div className="max-w-[1100px]   mx-auto h-[130vh]">
          <h1 className="text-center text-[22px] text-[$#666666] p-5">
            PHD Application Form 2024{" "}
          </h1>
          <div className="w-[85%] mx-auto h-[6px] rounded-xl border-solid border-[#1c1b1b] border-[0.5px] ">
            <div
              style={{ width: `${percentDone}%` }}
              className={`h-[100%] bg-[#1c1b1b]  `}
            ></div>
            <div
              style={{ marginLeft: `${percentDone - 1}%` }}
              className="flex flex-col  "
            >
              <IoMdArrowDropup />
              {percentDone}% Done
            </div>
          </div>
          <div className="flex gap-5 overflow-x-auto max-w-[85%] mx-auto py-4  font-semibold text-[18px] mt-5 ">
            <a
              href="#programDetails"
              className="min-w-[200px] h-[30px]"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#programDetails");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Program & basic details
            </a>
            <a
              href="#parentDetails"
              className="min-w-[200px] h-[30px]"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#parentDetails");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Parent's Details
            </a>
            <a
              href="#addressDetails"
              className="min-w-[200px] h-[30px]"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#addressDetails");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Address Details
            </a>
            <a
              href="#addressDetails"
              className="min-w-[200px] h-[30px]"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#addressDetails");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
             Educational Details
            </a>
            <a
              href="#declaration"
              className="min-w-[200px] h-[30px]"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#declaration");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Declaration
            </a>
           
           
          </div>
          <div className="w-[100%] py-4 px-3  bg-white mt-5 border-solid border-gray-300 border-[0.5px] ">
            <div id="programDetails">
              <h1 className="text-lg text-[#e45c37] mb-4 font-semibold ">
                Program Details
              </h1>
              <div className="flex gap-4 my-4 justify-evenly ">
                <div className="flex flex-col w-[30%] gap-[4px]  ">
                  <label htmlFor="program">Discipline Applied For:</label>
                  <select
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    className="border py-2 px-1 "
                    name=""
                    id="discipline"
                  >
                    <option className="" value="select">
                      select
                    </option>
                    <option className="" value="phd">
                      PHD
                    </option>
                  </select>
                </div>
                {formData.personalDetails.discipline === "phd" ? (
                  <div className="flex flex-col w-[30%] gap-[4px]  ">
                    <label htmlFor="program">Stream</label>
                    <select
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      className="border py-2 px-1 "
                      name=""
                      id="stream"
                    >
                      <option className="" value="">
                        select
                      </option>
                      <option className="" value="architecture">
                        Architecture
                      </option>
                      <option className="" value="basic sciences">
                        Basic Sciences
                      </option>
                      <option className="" value="engineering">
                        Engineering
                      </option>
                      <option className="" value="phd">
                        more
                      </option>
                      <option className="" value="phd">
                        coming soon
                      </option>
                    </select>
                  </div>
                ) : null}

                {formData.personalDetails.stream !== "" ? (
                  <div className="flex flex-col w-[30%] gap-[4px]">
                    <label htmlFor="program">Program</label>
                    <select
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      className="border py-2 px-1"
                      name=""
                      id="program"
                    >
                      {formData.personalDetails.stream === "architecture"
                        ? EngineeringPrograms.map((program) => (
                            <option key={program} className="" value={program}>
                              {program}
                            </option>
                          ))
                        : formData.personalDetails.stream === "basic sciences"
                        ? BasicSciencesPrograms.map((program) => (
                            <option key={program} className="" value={program}>
                              {program}
                            </option>
                          ))
                        : formData.personalDetails.stream === "engineering"
                        ? EngineeringPrograms.map((program) => (
                            <option key={program} className="" value={program}>
                              {program}
                            </option>
                          ))
                        : formData.personalDetails.stream === "basic sciences"
                        ? BasicSciencesPrograms.map((program) => (
                            <option key={program} className="" value={program}>
                              {program}
                            </option>
                          ))
                        : null}
                    </select>
                  </div>
                ) : null}
              </div>
              {/* <div className="w-full border-b-[3px] h-[1px] border-dotted mt-[50px] border-gray-500   "></div> */}
              <div className="pt-[50px]">
                <h1 className="text-lg text-[#e45c37] mb-4 font-semibold ">
                  Personal Details{" "}
                </h1>
                {/* start of 1st row */}
                <div className="flex flex-col gap-10">
                  <div className="flex gap-4 justify-evenly ">
                    <div className="flex flex-col gap-1 w-[22%]">
                      <label htmlFor="title">Title</label>
                      <select
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        className="border py-2 px-1"
                        name=""
                        id="title"
                      >
                        <option value="">select</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1 w-[24%]">
                      <label htmlFor="firstname">First Name</label>
                      <input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        className="py-2 px-1  border "
                        type="text"
                        name=""
                        placeholder="Firstname"
                        id="firstname"
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-[22%]">
                      <label htmlFor="middlename">Middle Name</label>
                      <input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        className="py-2 px-1  border "
                        type="text"
                        name=""
                        placeholder="Middlename"
                        id="middlename"
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-[22%]">
                      <label htmlFor="lastname">Last Name</label>
                      <input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        className="py-2 px-1  border "
                        type="text"
                        name=""
                        placeholder="Lastname"
                        id="lastname"
                      />
                    </div>
                  </div>
                  {/*  end of first row */}

                  <div className="flex gap-4 justify-evenly ">
                    <div className="flex flex-col gap-1 w-[22%]">
                      <label htmlFor="email">Student E-mail ID</label>
                      <input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        className="py-2 px-1  border "
                        type="email"
                        name=""
                        placeholder="Email id"
                        id="email"
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-[24%]">
                      <label htmlFor="Mobile">Mobile No</label>
                      <input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        className="py-2 px-1  border "
                        type="tel"
                        name=""
                        placeholder="Mobile no."
                        id="Mobile"
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-[22%]">
                      <label htmlFor="dob">Date of Birth</label>
                      <input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        className="py-2 px-1  border "
                        type="date"
                        name=""
                        placeholder="Date of Birth"
                        id="dob"
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-[22%]">
                      <label htmlFor="gender">Gender</label>
                      <select
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        className="border py-2 px-1"
                        name=""
                        id="gender"
                      >
                        <option value="">select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Gay">Gay</option>
                        <option value="Lesbians">Lesbians</option>
                        <option value="Trans">Trans</option>
                        <option value="Bise*ual">Bise*ual</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex  justify-start pl-4 gap-7 ">
                    <div className="flex flex-col gap-1 w-[22%]">
                      <label htmlFor="nationality">Nationality</label>
                      <input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        className="py-2 px-1  border "
                        type="text"
                        name=""
                        placeholder="Nationality"
                        id="nationality"
                      />
                    </div>

                    <div className="flex flex-col gap-1 w-[22%]">
                      <label htmlFor="caste">Caste Category</label>
                      <select
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        className="border py-2 px-1"
                        name=""
                        id="caste"
                      >
                        <option value="">select</option>
                        <option value="General">General</option>
                        <option value="OBC">OBC</option>
                        <option value="SC">SC</option>
                        <option value="St">ST</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/*  end of second row */}
              </div>
              <div className="flex w-full justify-center my-[50px]  ">
                <button
                  disabled={personalDetailDone}
                  onClick={() => {
                    setpersonalDetailDone(true);
                    setpercentDone(12);
                  }}
                  className=" disabled:opacity-80 w-[15%] bg-[#e45c37] text-white py-2 px-1 rounded-sm "
                >
                  Next
                </button>
              </div>
              {personalDetailDone ? (
                <div>
                  {/* father's details */}
                  <div className="w-full border-b-[3px] h-[1px] border-dotted mt-[50px] border-gray-500   "></div>
                  <div id="parentDetails" className="pt-[50px]">
                    <h1 className="text-lg text-[#e45c37] mb-4 font-semibold ">
                      Father's Details{" "}
                    </h1>
                    <div className="flex gap-4 justify-evenly ">
                      <div className="flex flex-col gap-1 w-[22%]">
                        <label htmlFor="Ftitle">Title</label>
                        <select
                          onChange={(e) => {
                            handleChange2(e);
                          }}
                          className="border py-2 px-1"
                          name=""
                          id="Ftitle"
                        >
                          <option value="">select</option>
                          <option value="Mr">Mr</option>
                          <option value="Dr">Dr</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1 w-[24%]">
                        <label htmlFor="Fname">Father's Name</label>
                        <input
                          onChange={(e) => {
                            handleChange2(e);
                          }}
                          className="py-2 px-1  border "
                          type="text"
                          name=""
                          placeholder="Name"
                          id="Fname"
                        />
                      </div>
                      <div className="flex flex-col gap-1 w-[22%]">
                        <label htmlFor="Fmobile">Mobile No.</label>
                        <input
                          onChange={(e) => {
                            handleChange2(e);
                          }}
                          className="py-2 px-1  border "
                          type="text"
                          name=""
                          placeholder="Mobile no."
                          id="Fmobile"
                        />
                      </div>
                      <div className="flex flex-col gap-1 w-[22%]">
                        <label htmlFor="Fmail">Father's Email</label>
                        <input
                          onChange={(e) => {
                            handleChange2(e);
                          }}
                          className="py-2 px-1  border "
                          type="text"
                          name=""
                          placeholder="Email"
                          id="Fmail"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="w-full border-b-[3px] h-[1px] border-dotted mt-[50px] border-gray-500   "></div> */}

                  {/* mother's details */}
                  <div className="pt-[50px]">
                    <h1 className="text-lg text-[#e45c37] mb-4 font-semibold ">
                      Mother's Details{" "}
                    </h1>
                    <div className="flex gap-4 justify-evenly ">
                      <div className="flex flex-col gap-1 w-[22%]">
                        <label htmlFor="Mtitle">Title</label>
                        <select
                          onChange={(e) => {
                            handleChange2(e);
                          }}
                          className="border py-2 px-1"
                          name=""
                          id="Mtitle"
                        >
                          <option value="">select</option>
                          <option value="Mrs">Mrs</option>
                          <option value="Dr">Dr</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1 w-[24%]">
                        <label htmlFor="Mname">Mother's Name</label>
                        <input
                          onChange={(e) => {
                            handleChange2(e);
                          }}
                          className="py-2 px-1  border "
                          type="text"
                          name=""
                          placeholder="Name"
                          id="Mname"
                        />
                      </div>
                      <div className="flex flex-col gap-1 w-[22%]">
                        <label htmlFor="Mmobile">Mobile No.</label>
                        <input
                          onChange={(e) => {
                            handleChange2(e);
                          }}
                          className="py-2 px-1  border "
                          type="text"
                          name=""
                          placeholder="Mobile no."
                          id="Mmobile"
                        />
                      </div>
                      <div className="flex flex-col gap-1 w-[22%]">
                        <label htmlFor="Mmail">Mother's Email</label>
                        <input
                          onChange={(e) => {
                            handleChange2(e);
                          }}
                          className="py-2 px-1  border "
                          type="text"
                          name=""
                          placeholder="Email"
                          id="Mmail"
                        />
                      </div>
                    </div>
                    <div className="flex w-full justify-center my-[50px]  ">
                      <button
                        disabled={ParentDetailDone}
                        onClick={() => {
                          setParentDetailDone(true);
                          setpercentDone(31);
                        }}
                        className=" disabled:opacity-85 w-[15%] bg-[#e45c37] text-white py-2 px-1 rounded-sm "
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}

              {ParentDetailDone ? (
                <div>
                  <div className="w-full border-b-[3px] h-[1px] border-dotted mt-[50px] border-gray-500   "></div>
                  <div id="addressDetails" className="pt-[50px]  ">
                    <h1 className="text-lg text-[#e45c37] mb-4 font-semibold ">
                      Address Details{" "}
                    </h1>
                    <div className="flex flex-col gap-4 justify-evenly px-4 ">
                      <textarea
                        onChange={(e) => handleChange3(e)}
                        name=""
                        className="border"
                        id="address"
                        cols="120"
                        rows="2"
                      ></textarea>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="">Is this your Permanent Adress</label>
                        <div className="flex gap-2">
                          <input
                            onChange={(e) => handleChange3(e)}
                            checked={
                              formData.addressDetails.isPermanentAddress ===
                              "yesPermanent"
                            }
                            type="radio"
                            name=""
                            id="yesPermanent"
                          />
                          <label htmlFor="yesPermanent">Yes</label>
                          <input
                            onChange={(e) => handleChange3(e)}
                            checked={
                              formData.addressDetails.isPermanentAddress ===
                              "noPermanent"
                            }
                            type="radio"
                            name=""
                            id="noPermanent"
                          />
                          <label htmlFor="noPermanent">No</label>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full justify-center my-[50px]  ">
                      <button
                        disabled={addressDetailDone}
                        onClick={() => {
                          setAddressDetailDone(true);
                          setpercentDone(53);
                        }}
                        className=" disabled:opacity-85 w-[15%] bg-[#e45c37] text-white py-2 px-1 rounded-sm "
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
              {/* declaration */}
              {addressDetailDone ? (
                <div id="declaration" >
                  <div className="w-full border-b-[3px] h-[1px] border-dotted mt-[50px] border-gray-500   "></div>
                  <div id="addressDetails" className="pt-[50px]  ">
                    <h1 className="text-lg text-[#e45c37] mb-4 font-semibold ">
                      Declaration
                    </h1>
                    <div className="flex items-start gap-4 justify-evenly px-4  ">
                      <input
                        className="w-[1.7%] mt-2  "
                        onChange={(e) => handleChange4(e)}
                        type="checkbox"
                        name=""
                        id="declared"
                      />
                      i hereby declare that the information given above is true
                      and correct. I understand that any misrepresentation or
                      false statement may lead to severe consequences.
                    </div>
                    <div className="flex w-full justify-center my-[50px]  ">
                      <button
                        disabled={declarationDone}
                        onClick={() => {
                          setDeclarationDone(true);
                          setpercentDone(100);
                        }}
                        className=" disabled:opacity-85 w-[15%] bg-green-600 text-white py-2 px-1 rounded-sm "
                      >
                        Submit Form
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Apply;
