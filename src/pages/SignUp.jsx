import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";


export default function SignUp() {
  
  const [ email, setEmail ] = useState("");
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  
  return (
    <div className="gap-3 flex items-center h-screen w-full justify-center bg-linear-to-br from-violet-900 to-green-900">
      {/* RegisterBox */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <div className="flex grow mb-4 flex-col">
           <h1 className="text-3xl font-bold text-center">
            Create Account
          </h1>
          <p className="text-center text-gray-500">Start posting your emotion</p>
        </div>

        <form className="flex grow flex-col gap-2 justify-center">
          {/* Input field */}
          <div className="items-center gap-4 flex">
            <Input type="email" placeholder="Email" 
              value={email}
              setEmail={setEmail}
            />
          </div>
          <div className="flex items-center gap-4">
            <Input type="text" placeholder="Username" 
              value={username}
              setUsername={setUsername}
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
            Sign up
          </button>
          <p className="text-center">
            Already have a Account? <Link to={"/login"} className="text-blue-700 hover:text-blue-400 duration-200 ease-in-out">Login</Link>
          </p>
        </form>

      </div>
    </div>
  )
}
