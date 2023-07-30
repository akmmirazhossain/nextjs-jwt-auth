import { Component, useEffect } from "react"
import React, { useState } from 'react';
import jwt from 'jsonwebtoken'
import TopNavbar from '../components/TopNavbar';
//import { parse } from 'cookie';





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

      console.log(json);
      

      if (json.loggedin)
      {
        setMessage(`Hi ${json.username}, you have successfully logged in!`)
        document.cookie = `cname=${json.username}-${token}; max-age=86400; path=/`;
       
        
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



  const [cookieExists, setCookieExists] = useState(false);

  useEffect(() => {
    // Check if the cookie exists when the component mounts
    const checkCookieExists = () => {
      const cookies = document.cookie.split(';').map((cookie) => cookie.trim());
      const cookieName = 'cname'; // Replace with the actual name of the cookie you want to check

      const exists = cookies.some((cookie) => cookie.startsWith(`${cookieName}=`));
      setCookieExists(exists);
    };

    checkCookieExists();
  }, []);

  const handleLogout = () => {
    // Delete the cookie when the user clicks logout
    const cookieName = 'cname'; // Replace with the actual name of the cookie you want to delete
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

    // After deleting the cookie, refresh the page to update the UI
    window.location.reload();
  };

 

  return (
    <div>

<TopNavbar />



      {cookieExists ? (
         <form>
         <h2>{message}</h2>
         <button onClick={handleLogout}>Logout</button>
       </form>
        
      ) : (
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
      )}
    </div>
  );


  
  

  
}

