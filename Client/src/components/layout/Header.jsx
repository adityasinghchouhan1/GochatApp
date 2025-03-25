import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import React from 'react'
import { orange } from '../../Constants/color'
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
} from '@mui/icons-material'
import useNavigate from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const handleMobile = () => {
    console.log('handleMobile')
  }

  const openSeacrhHandle = () => {
    console.log('openSeacrhHandle')
  }

  const openNewGroup = () => {
    console.log('openNewGroup')
  }
  const NavigateToGroup = () => {
    console.log('NavigateToGroup')
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
              <Tooltip title="Search">
                <IconButton
                  color="inherit"
                  size="large"
                  onClick={openSeacrhHandle}
                >
                  <SearchIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="New Group">
                <IconButton color="inherit" size="large" onClick={openNewGroup}>
                  <AddIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Manage Groups">
                <IconButton
                  color="inherit"
                  size="large"
                  onClick={NavigateToGroup}
                >
                  <GroupIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header
