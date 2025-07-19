import React from 'react'

export default function Signup() {
  return (
    <div>
        <h2>Sign Up</h2>
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
        </form>
    </div>
  )
}
