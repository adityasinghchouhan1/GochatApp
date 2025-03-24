import React from 'react'
import Title from '../shared/Title'

const AppLayout = (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Headers />
        <WrappedComponent {...props} />
        <div>Footer</div>
      </>
    )
  }
}

export default AppLayout
