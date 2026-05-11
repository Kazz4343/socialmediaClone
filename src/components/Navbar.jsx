import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export default function Navbar() {
  
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex">
      <div className="p-10 pr-25 border-r border-black w-fit min-h-screen flex flex-col">
        <p className="font-bold text-[2.5rem]">
          Logo
        </p>
        <div className="flex flex-col gap-6.25 mt-15">
          <Link to={"/"} 
            className="flex items-center gap-5">
            <FaHome className="text-[1.7rem]"/><p className="text-[1.2rem]">Home</p>
          </Link>
          <Link to={"/add-post"} 
            className="flex items-center gap-5">
            <IoIosAddCircleOutline className="text-[1.7rem]"/><p className="text-[1.2rem]">Add Post</p>
          </Link>
          <Link to={"/profile"} 
            className="flex items-center gap-5">
            <FaAddressBook className="text-[1.7rem]"/><p className="text-[1.2rem]">@{user.username}</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
