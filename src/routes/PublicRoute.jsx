import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom"


export default function PublicRoute({ children }) {
  
  const { user } = useContext(AuthContext)

  return (
    <div>
      { user ? <Navigate to={"/"}/> : children }
    </div>
  )
}
