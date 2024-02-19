import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Apply() {
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
    discipline: "",
    stream: "",
    program: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <>
      <Navbar />
      <div className="bg-[#eaeaea]">
        <div className="max-w-[1100px]   mx-auto h-[130vh]">
          <h1 className="text-center text-[22px] text-[$#666666] p-5">
            PHD Application Form 2024{" "}
          </h1>
          <div className="flex gap-5 overflow-x-auto max-w-full mt-5 ">
            <div className="min-w-[200px] h-[30px]">
              Program and basic details
            </div>
            <div className="min-w-[200px]">Parent's Details</div>
            <div className="min-w-[200px]">Address Details</div>
            <div className="min-w-[200px]">
              Educational Qualification Details
            </div>
            <div className="min-w-[200px]">Declaration</div>
            <div className="min-w-[200px]">Declaration</div>
            <div className="min-w-[200px]">Declaration</div>
          </div>
          <div className="w-[100%] py-4 px-3 h-[200vh] bg-white mt-5 border-solid border-gray-300 border-[0.5px] ">
            <div>
              <h1 className="text-lg">Program Details</h1>
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
                {formData.discipline === "phd" ? (
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

                {formData.stream !== "" ? (
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
                      {formData.stream === "architecture"
                        ? EngineeringPrograms.map((program) => (
                            <option key={program} className="" value={program}>
                              {program}
                            </option>
                          ))
                        : formData.stream === "basic sciences"
                        ? BasicSciencesPrograms.map((program) => (
                            <option key={program} className="" value={program}>
                              {program}
                            </option>
                          ))
                        : formData.stream === "engineering"
                        ? EngineeringPrograms.map((program) => (
                            <option key={program} className="" value={program}>
                              {program}
                            </option>
                          ))
                        : formData.stream === "basic sciences"
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
              <div className="w-full border-b-[3px] h-[1px] border-dotted mt-[50px] border-gray-500   "></div>
              <div className="pt-4">
                <h1 className="text-lg">Program Details</h1>
                {/* start of 1st row */}
                <div className="flex flex-col gap-10" >
                  <div className="flex gap-4 justify-evenly ">
                  <div className="flex flex-col gap-1 w-[22%]">
                    <label htmlFor="title">Title</label>
                    <select className="border py-2 px-1" name="" id="title">
                      <option value="">select</option>
                      <option value="">Mr</option>
                      <option value="">Mrs</option>
                      <option value="">Miss</option>
                      
                    </select>
                  </div>
                  <div className="flex flex-col gap-1 w-[24%]">
                    <label htmlFor="firstname">First Name</label>
                    <input
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
                      className="py-2 px-1  border "
                      type="date"
                      name=""
                      placeholder="Date of Birth"
                      id="dob"
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-[22%]">
                    <label htmlFor="gender">Gender</label>
                    <select className="border py-2 px-1" name="" id="gender">
                      <option value="">Male</option>
                      <option value="">Female</option>
                      <option value="">Gay</option>
                      <option value="">Lesbians</option>
                      <option value="">Trans</option>
                      <option value="">Bise*ual</option>
                      
                    </select>
                  </div>
                </div>
                </div>
                {/*  end of second row */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Apply;
