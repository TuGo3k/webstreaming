import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLogin(location.pathname === "/login");
  }, [location.pathname]);

  const toggleAuth = () => {
    const newPath = isLogin ? '/signup' : '/login';
    setIsLogin(!isLogin);  // Manually update state
    navigate(newPath);
  };
  

  return (
    <div className="flex h-screen items-center justify-center bg-[#242c38] px-4">
      <div className="w-full h-1/2 max-w-4xl  bg-[#1d242f] shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Image Section */}
        <div
          className="hidden md:flex w-1/2 bg-cover bg-center items-center justify-center text-white p-8"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/9954465/pexels-photo-9954465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <h2 className="text-2xl font-semibold">
            Capturing Moments, Creating Memories
          </h2>
        </div>
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 text-white flex flex-col  justify-center">
          <h2 className="text-2xl font-semibold text-[#e4d804] text-center">
            {isLogin ? "Sign In" : "Create an Account"}
          </h2>
          <p className="text-gray-400 text-sm text-center mt-2">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              className="text-[#e4d804] hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </p>
          <form className="mt-6 space-y-4">
            {!isLogin && (
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 p-3 rounded bg-[#2b3543] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 p-3 rounded bg-[#2b3543] focus:outline-none"
                />
              </div>
            )}
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
            {!isLogin && (
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <input type="checkbox" id="terms" className="w-4 h-4" />
                <label htmlFor="terms">
                  I agree to the{" "}
                  <a href="#" className="text-[#e4d804]">
                    Terms & Conditions
                  </a>
                </label>
              </div>
            )}
            <button onClick={toggleAuth} className="w-full bg-[#e4d804] text-[#242c38] p-3 rounded font-semibold">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
