import React, { useState } from 'react'
import { VisuallyHiddenInput } from '../components/style/StyledComponents'

import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

import { CameraAlt } from '@mui/icons-material'
import { useFileHandler, useInputValidation, useStrongPassword } from '6pp'
import { usernameValidator } from '../utils/validators'
const Login = () => {
  const [isLogin, setIsLogin] = useState(false)

  const name = useInputValidation('')
  const bio = useInputValidation('')
  const username = useInputValidation('', usernameValidator)
  const password = useStrongPassword('')

  const toggleLogin = () => {
    setIsLogin((prev) => !prev)
  }

  const avatar = useFileHandler('single')

  const handleLogin = (e) => {
    e.preventDefault()
  }
  const handleSingUp = (e) => {
    e.preventDefault()
  }

  return (
    <Container
      component={'main'}
      maxWidth="xs"
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form onSubmit={handleLogin}>
              <TextField
                required
                fullWidth
                label="username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              ></TextField>
              <TextField
                required
                fullWidth
                label="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              ></TextField>
              <Button
                sx={{ marginTop: '1rem' }}
                fullWidth
                textAlign={'center'}
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
            </form>
            <Typography textAlign={'center'} m={'1rem'}>
              OR
            </Typography>
            <Button fullWidth text="primary" onClick={() => toggleLogin()}>
              Sign Up Instead
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h5"> Sign Up</Typography>
            <form
              onSubmit={handleSingUp}
              style={{ width: '100%', marginTop: '1rem' }}
            >
              <Stack position={'relative'} width={'10rem'} margin={'auto'}>
                <Avatar
                  sx={{ width: '10rem', height: '10rem', ObjectFit: 'contain' }}
                  src={avatar.preview}
                />
                {avatar.error && (
                  <Typography
                    m={'1rem'}
                    width={'fit-content'}
                    display={'block'}
                    color="error"
                    variant="caption"
                  >
                    {avatar.error}
                  </Typography>
                )}
                <IconButton
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    color: 'white',
                    bgcolor: 'rgba(0,0,0,0.5)',
                    ':hover': { bgcolor: 'rgba(0,0,0,0.7)' },
                  }}
                  component="label"
                >
                  <CameraAlt />
                  <VisuallyHiddenInput
                    type="file"
                    onChange={avatar.changeHandler}
                  />
                </IconButton>
              </Stack>

              <TextField
                required
                fullWidth
                label="name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              ></TextField>
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              ></TextField>
              <TextField
                required
                fullWidth
                label="username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              ></TextField>
              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                label="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              ></TextField>
              {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )}
              <Button
                sx={{ marginTop: '1rem' }}
                fullWidth
                textAlign={'center'}
                variant="contained"
                color="primary"
                type="submit"
              >
                {' '}
                Sign Up
              </Button>
            </form>
            <Typography textAlign={'center'} m={'1rem'}>
              OR
            </Typography>
            <Button fullWidth text="primary" onClick={() => toggleLogin()}>
              Login Instead
            </Button>
          </>
        )}
      </Paper>
    </Container>
  )
}

export default Login
