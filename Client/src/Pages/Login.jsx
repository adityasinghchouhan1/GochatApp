import React, { useState } from 'react'
import { Button, Container, Paper, TextField, Typography } from '@mui/material'

const Login = () => {
  const [isLogin, setIsLogin] = useState(false)

  const toggleLogin = () => {
    setIsLogin((prev) => !prev)
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
            <form>
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              ></TextField>
              <TextField
                required
                fullWidth
                label="Password"
                margin="normal"
                variant="outlined"
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
            <form>
              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
              ></TextField>
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
              ></TextField>
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              ></TextField>
              <TextField
                required
                fullWidth
                label="Password"
                margin="normal"
                variant="outlined"
              ></TextField>
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
