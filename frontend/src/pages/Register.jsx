import React, { useEffect, useState } from "react";
import bgimg from "../assets/bgimg.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [allerror,SetAllError]=useState(null);
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/signup", formData);
      SetAllError(null);
      navigate("/signin");
    } catch (e) {
      SetAllError(e.response.data);
    }
  };

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value });
  };
  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute inset-0 z-0">
        <img className="h-full w-full object-cover" src={bgimg} alt="" />
      </div>

      <div className="left-[27%] w-[40%] p-[45px] absolute lg:w-[30%] rounded lg:left-[57%] top-[20%] bg-[#fff] z-[5] h-[60%]">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          action=""
        >
          <h1 className="font-semibold text-[27px] uppercase text-gray-800">
            Register
          </h1>
                <h1 className='text-[red] font-semibold text-center mt-3 mb-[-22px] ' >{allerror}</h1>
          <div className="flex flex-col gap-4 mt-10">
            <div>
              <label htmlFor="username">Username</label>
              <br />
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                className=" outline-none w-[100%] px-2 py-1 border-b-[2px] border-[#d3632e] border-solid"
                type="text"
                name="username"
                id="username"
              />
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <br />
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                className=" outline-none w-[100%] px-2 py-1 border-b-[2px] border-[#d3632e] border-solid"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <br />
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                className=" outline-none w-[100%] px-2 py-1 border-b-[2px] border-[#d3632e] border-solid"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <span className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to={"/signin"} className="text-blue-700 font-semibold">
                Sign in
              </Link>{" "}
            </span>
            <div>
              <button className="mt-5 ml-[34%] w-[27%] bg-[#d3632e] px-3 py-[6px] rounded text-white">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="overlay bg-[black] bg-opacity-50 inset-0 absolute z-[1]"></div>
    </div>
  );
};

export default Register;
