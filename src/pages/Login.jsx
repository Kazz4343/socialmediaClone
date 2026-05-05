import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useState } from "react";


export default function Login() {
  
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  
  return (
    <div className="gap-3 flex items-center h-screen w-full justify-center bg-linear-to-br from-violet-900 to-green-900">
      {/* RegisterBox */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        <div className="flex grow mb-4 flex-col">
           <h1 className="text-3xl font-bold text-center">
            Login
          </h1>
          <p className="text-center text-gray-500">Welcome back</p>
        </div>

        <form className="flex grow flex-col gap-2 justify-center">
          
          <div className="items-center gap-4 flex">
            <Input type="email" placeholder="Email" 
              value={email}
              setEmail={setEmail}
            />
          </div>
         
          <div className="flex items-center gap-4 mb-3">
            <Input type="password" placeholder="Password" 
            value={password}
            setPassword={setPassword}
          />
          </div>
          <button 
            className="bg-black 
            p-2 rounded-full text-white 
            shadow-xl cursor-pointer hover:bg-gray-800
            duration-200 ease-in-out"
          >
            Login
          </button>
          <p className="text-center"
          
          >
            Don't have a Account? <Link to={"/signUp"} className="text-blue-700 hover:text-blue-400 duration-200 ease-in-out">Sign Up</Link>
          </p>
        </form>

      </div>
    </div>
  )
}
