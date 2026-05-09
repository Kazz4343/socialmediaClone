import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import AddPost from './pages/AddPost.jsx'
import AuthProvider from './context/AuthContext.jsx'
import PublicRoute from './routes/PublicRoute.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute>
      <Home />
    </ProtectedRoute>
  },
  {
    path: "/login",
    element: <PublicRoute>
      <Login />
    </PublicRoute>
  },
  {
    path: "/signUp",
    element: <PublicRoute>
      <SignUp />
    </PublicRoute>
  },
  {
    path: "/profile",
    element: 
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  },
  {
    path: "/add-post",
    element: 
    <ProtectedRoute>
      <AddPost />
    </ProtectedRoute>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
