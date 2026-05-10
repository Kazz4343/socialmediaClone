import { useState } from "react";
import Navbar from "../components/Navbar";
import Textarea from "../components/Textarea";
import LogoutModal from "../components/LogoutModal";


export default function AddPost() {
  
  const [ title, setTitle ] = useState("");
  const [ message, setMessage ] = useState("");
  return (
    <div>
      <Navbar />
      <div>
        <h1>Add Post</h1>
        <label htmlFor="title">Title</label>
        <input 
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id='title'
        />
        <Textarea 
          placeholder={'message'}
          id={'message'}
          value={message}
          setValue={setMessage}
        />
        <LogoutModal />
      </div>
    </div>
  )
}
