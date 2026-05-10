import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { BsEscape } from "react-icons/bs";

export default function LogoutModal() {
  
   const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div>
      <button 
        className="flex gap-2 items-center 
        justify-center bg-black text-white font-bold
        py-1.5 px-2.5 rounded-lg shadow-2xl"
      >
        <BsEscape 
          className="text-xl"
        />
          <p>Logout</p>
      </button>
    </div>
  )
}
