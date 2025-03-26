import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import React, { lazy, Suspense, useState } from 'react'
import { orange } from '../../Constants/color'
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Search = lazy(() => import('../specific/Search'))
const Noticications = lazy(() => import('../specific/Noticications'))
const NewGroups = lazy(() => import('../specific/NewGroups'))

const Header = () => {
  const [isMoblie, setisMoblie] = useState(false)
  const [isSearch, setSearch] = useState(false)
  const [isNewgroup, setisNewgroup] = useState(false)
  const [isNotification, setisNotification] = useState(false)

  const navigate = useNavigate()

  const handleMobile = () => {
    setisMoblie((prev) => !prev)
  }

  const openSeacrhHandle = () => {
    setSearch((prev) => !prev)
  }

  const openNewGroup = () => {
    setisNewgroup((prev) => !prev)
  }

  const openNotification = () => {
    setisNotification((prev) => !prev)
  }
  const NavigateToGroup = () => navigate('/Groups')

  const LogoutHandler = () => {
    console.log('LogoutHandler')
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={'4rem'}>
        <AppBar position="static" sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              GoChat
            </Typography>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconBtn
                title={'Search'}
                icon={<SearchIcon />}
                onClick={openSeacrhHandle}
              />

              <IconBtn
                title={'New Group'}
                icon={<AddIcon />}
                onClick={openNewGroup}
              />
              <IconBtn
                title={'Manage Groups'}
                icon={<GroupIcon />}
                onClick={NavigateToGroup}
              />

              <IconBtn
                title={'Notifications'}
                icon={<NotificationsIcon />}
                onClick={openNotification}
              />
              <IconBtn
                title={'Logout'}
                icon={<LogoutIcon />}
                onClick={LogoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <Search />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <Noticications />
        </Suspense>
      )}
      {isNewgroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroups />
        </Suspense>
      )}
    </>
  )
}
const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  )
}

export default Header
