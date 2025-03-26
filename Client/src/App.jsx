import React, { lazy, Suspense, use } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute'
import LayoutLoader from './components/layout/Loaders'

const Home = lazy(() => import('./Pages/Home'))

const Login = lazy(() => import('./Pages/Login'))

const Chat = lazy(() => import('./Pages/Chat'))

const Groups = lazy(() => import('./Pages/Groups'))

const NotFound = lazy(() => import('./Pages/NotFound'))

let user = true

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/Chat/:chatId" element={<Chat />} />
            <Route path="/Groups" element={<Groups />} />
          </Route>
          <Route
            path="/Login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
