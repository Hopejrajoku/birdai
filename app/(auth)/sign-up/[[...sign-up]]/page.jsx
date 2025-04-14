import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div
      style={{ paddingBottom: "2rem"}}
    >
      <SignUp />
    </div>
  )
}

export default page