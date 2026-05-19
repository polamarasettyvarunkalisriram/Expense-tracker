import React from 'react'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/clerk-react'

import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>

      <SignedOut>
        <SignInButton mode="modal">
          <button>Sign In To Expense Tracker</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton />

        <Link to="/home">
          <button>Go To Home</button>
        </Link>
      </SignedIn>

    </div>
  )
}

export default Login