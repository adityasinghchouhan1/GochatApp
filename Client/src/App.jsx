import React, { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./Pages/Home'))

const Login = lazy(() => import('./Pages/Login'))

const Chat = lazy(() => import('./Pages/Chat'))

const Groups = lazy(() => import('./Pages/Groups'))

const App = () => {
  return (
    <BrowserRouter>
      <span></span>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Chat/:chatId" element={<Chat />} />
        <Route path="/Groups" element={<Groups />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
