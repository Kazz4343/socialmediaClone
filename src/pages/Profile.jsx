import { useContext, useEffect, useState } from "react";
import LogoutModal from "../components/LogoutModal";
import Navbar from "../components/Navbar";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import Posts from "../components/Posts";


export default function Profile() {
  
  const { user } = useContext(AuthContext);
  const [ postProfile, setPostProfile] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const postRef = collection(db, "posts")
        const q = query(postRef, where("userID", "==", user?.id))
        const snapshort = await getDocs(q);

        const post = snapshort.docs.map((doc) => ({...doc.data(), id: doc.id})).sort((a, b) => {
          const aTime = a.createdAt?.toMillis?.() ?? 0;
          const bTime = b.createdAt?.toMillis?.() ?? 0;
          return bTime - aTime;
        });
        setPostProfile(post)
      } catch (err) {
        console.log(err)
      }
    }
    fetchProfile()
  },[])
  
  return (
      <div className="flex w-full">
        <Navbar />
        
        <div className="flex flex-col grow justify-start mt-3 ">
          <h1 className="text-4xl font-bold border-b border-gray-300 pl-2">Profile</h1>
          {postProfile.map((post) => {
                    return(
                      <div key={post.id} className="pl-7 mt-3">
                        <Posts title={post.Title} message={post.Message} username={post.created_By} date={post.created_At} />
                      </div>
                    )
                  })}
        </div>
        <LogoutModal />
      </div>
    )
}
