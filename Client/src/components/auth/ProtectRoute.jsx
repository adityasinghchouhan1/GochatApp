import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectRoute = ({ children, user, redirect = '/Login' }) => {
  console.log('ProtectRoute - User:', user) // Debugging

  if (!user) return <Navigate to={redirect} />

  return children ? children : <Outlet />
}

export default ProtectRoute
