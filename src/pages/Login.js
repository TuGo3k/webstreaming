import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Waves from "../components/Waves";
// import Waves from "./Waves";
export default function Login({ bg, isFading }) {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex h-screen items-center justify-center bg-[#242c38] px-4">
     
      <Waves
        lineColor="#fff"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      
  
      <div className="relative w-full h-2/3 max-w-7xl justify-center bg-[#1d242f] shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* <div className="absolute bg-blend-multiply lg:hidden top-0 left-0 w-full h-full ">
          <img src={bg} className="bg-center  bg-cover w-full h-full object-cover z-[-1]"></img>
        </div> */}
        {/* Image Section */}
        <div
          className={`hidden md:flex w-1/2 bg-cover bg-center items-center justify-center text-white p-8  transition-opacity duration-500 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <h2 className="text-2xl font-semibold">
            Capturing Moments, Creating Memories
          </h2>
        </div>
        {/* Form Section */}
        <div className="w-full md:w-1/2 py-8 px-16 lg:px-32 text-white flex flex-col  justify-center gap-5">
          <div>
            <h2 className="text-2xl font-semibold text-[#e4d804] text-center">
              Login
            </h2>
            <p className="text-gray-400 text-sm text-center mt-2">
              Don't have an account?{" "}
              <Link to={"/signup"} className="text-[#e4d804] hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
          <form className="mt-6 space-y-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-[#2b3543] focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded bg-[#2b3543] focus:outline-none"
            />
          </form>
          <button className="w-full bg-[#e4d804] text-[#242c38] p-3 rounded font-semibold">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
