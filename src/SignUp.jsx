import { Link } from "react-router-dom";


export default function SignUp() {
  return (
    <div className="gap-3 flex items-center h-screen w-full justify-center bg-green-900">
      {/* RegisterBox */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        <div className="flex grow mb-4">
           <h1 className="text-3xl font-bold text-center mb-6">
            Create Account
          </h1>
        </div>

        <form className="flex grow flex-col gap-2 justify-center">
          
          <div className="grid grid-cols-[120px_1fr] items-center gap-4">
            <label className="text-xl mb-1 text-gray-600" htmlFor="input1">Email</label>
            <input type="email" placeholder="Arsa_Esan@hotmail.com" 
              className="px-3 py-2 border rounded-lg focus:outline-none"
              required
              id="input1"
            />
          </div>
          <div className="grid grid-cols-[120px_1fr] items-center gap-4">
            <label className="text-xl text-gray-600" htmlFor="input2">Username</label>
            <input type="text" placeholder="Arsa_love_minor" 
              className="px-3 py-2 border rounded-lg focus:outline-none"
              required
              id="input2"
            />
          </div>
          <div className="grid grid-cols-[120px_1fr] items-center gap-4 mb-3">
            <label className="text-xl mb-1 text-gray-600" htmlFor="input3">Password</label>
            <input type="password" placeholder="*&+*+!@#=+@" 
              className="px-3 py-2 border rounded-lg focus:outline-none"
              required
              id="input3"
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
          <p className="text-center"
          
          >
            Already have a Account? <Link to={"/login"} className="text-blue-900 hover:text-blue-400 duration-200 ease-in-out">Login</Link>
          </p>
        </form>

      </div>
    </div>
  )
}
