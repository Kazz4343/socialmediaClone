
import { useContext, useEffect, useState } from "react";
import LogoutModal from "../components/LogoutModal";
import Navbar from "../components/Navbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Posts from "../components/Posts";



export default function Home() {
  
  const [ postHome, setPostHome ] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsRef = collection(db, "posts");
        const postDocs = await getDocs(postsRef)

        const posts = postDocs.docs.map((doc) => ({...doc.data(), id: doc.id})).sort((a, b) => {
          const aTime = a.createdAt?.toMillis?.() ?? 0;
          const bTime = b.createdAt?.toMillis?.() ?? 0;
          return bTime - aTime;
        });
        console.log(posts)
        setPostHome(posts);
      } catch (err) {
        console.log(err)
      }
    }

    fetchPosts();
  }, [])
 
  return (
    <div className="flex w-full">
      <Navbar />
      
      <div className="flex flex-col grow justify-start mt-3 ">
        <h1 className="text-4xl font-bold border-b border-gray-300 pl-2">Home</h1>
        {postHome.map((post) => {
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
