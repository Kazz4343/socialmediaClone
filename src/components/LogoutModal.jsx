import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export default function LogoutModal() {
  
  const { user } = useContext(AuthContext);
  
  const handleLogout = async () => {
    try {
      await signOut(auth);
      
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
  <div className="flex items-start border-l border-gray-200 p-10">
    <GiPlagueDoctorProfile className="text-2xl mr-2 mt-1" />
    <div className="flex flex-col">
      <p className="text-sm font-bold">@{user.username}</p>
      <button
        onClick={handleLogout}
        className="text-sm text-gray-400 text-left hover:text-black"
      >
        Logout
      </button>
    </div>
  </div>
);
}
