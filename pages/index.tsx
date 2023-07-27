import { useEffect } from "react"
import React, { useState } from 'react';
import jwt from 'jsonwebtoken'

export default function Home() {



  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [message, setMessage] = useState<string>('Please login:')
  

  async function submitForm() {

    //SEND
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }).then((t) => t.json())

    //RECIEVE AFTER VERIFICATION
    const token = res.token

    if (token) {

      const json = jwt.decode(token) as { [key: string]: string }

      if (json.loggedin)
      {
        setMessage(`Hi ${json.username}, you have successfully logged in!`)

      }
      else
      {
        setMessage('Login failed, please try again.')
      }
      

    }

    else{
      setMessage('Something went wrong')
    }

  }

  return (
   
    <form>
       <h2>{message}</h2>
      <div>
        <label>Email:</label> 
        <br />
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <br />
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <input type="button" value="Login" onClick={submitForm} />
    </form>
  )
}

