import { Navigate, Outlet } from "react-router-dom";

export const AuthRoute = ({ user }) => {
  if(!user){
    return <Navigate to="/login" />
  }

  return <Outlet />
}