import axios from "axios";
import React, { useState } from "react";
// import { Link } from 'react-router-dom';

export default function Signup() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const ChangeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: [e.target.value] });
  };
  const signUpHandler = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      const res = await axios.post(
        "http:localhost:4000/api/v1/user/register",
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.succss) {
        console.log("addddededed");
      }
    } catch (error) {
      console.log("failedd", error);
    }
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <form
        onSubmit={signUpHandler}
        className="shadow-lg flex flex-col gap-5 p-8"
      >
        <div className="my-4">
          <h1>LOGO</h1>
          <p>Signup to see photos & videos from your friends</p>
        </div>
        <div className="flex flex-col items-start">
          <div>
            <span className="font-medium">Username</span>
            <input
              type="text"
              name="username"
              value={input.username}
              onChange={ChangeEventHandler}
              className="border border-gray-300 rounded mx-5 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 my-2"
            />
          </div>
          <div>
            <span className="font-medium">Email</span>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={ChangeEventHandler}
              className="border border-gray-300 rounded mx-13 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 my-2"
            />
          </div>
          <div>
            <span className="font-medium">Password</span>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={ChangeEventHandler}
              className="border border-gray-300 rounded mx-6 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 my-2"
            />
          </div>
          <button
            type="submit"
            className="self-center bg-blue-500 text-white px-4 py-2 rounded"
          >
            Signup
          </button>
        </div>
        <span className="text-center">Already have an account? </span>
      </form>
    </div>
  );
}
