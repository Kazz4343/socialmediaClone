import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Textarea from "../components/Textarea";
import LogoutModal from "../components/LogoutModal";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { serverTimestamp } from "firebase/firestore";

export default function AddPost() {
  
  const [ title, setTitle ] = useState("");
  const [ message, setMessage ] = useState("");
  const { user } = useContext(AuthContext); 

  const createPost = async () => {
    try {
      const postRef = collection(db, "posts")
      await addDoc(postRef, {
        Title: title,
        Message: message,
        userID: user?.id,
        created_At: serverTimestamp(),
        created_By: user.username
      })
      setMessage("")
      setTitle("")
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div className="flex">
      <Navbar />
      <div className="flex flex-col grow justify-center items-center ">
        <h1 className="text-3xl font-bold">Add Post</h1>
        <p className="text-sm text-gray-400">How do you feel today?</p>
        <div className="flex flex-col w-96 gap-1 mt-8">
          <input 
            type="text"
            placeholder="Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id='title'
            className="border rounded-lg p-1"
          />
          <Textarea
            placeholder={'Message of the day....'}
            id={'message'}
            value={message}
            setValue={setMessage}
          />
          <button 
            className="bg-black text-white rounded-lg grow mt-1 py-2"
            onClick={createPost}
          >
            Create
          </button>
        </div>
      </div>
      <LogoutModal />
    </div>
  )
}
