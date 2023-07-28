// components/AdminPage.js
import React, { useState } from 'react';
import { Component, useEffect } from "react"
import Cookies from 'js-cookie';
import TopNavbar from '../components/TopNavbar';

const AdminPage = () => {
 

  //CHECK IF COOKIE EXISTS
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

  return (
    <div>
      <TopNavbar />
      <h1>Admin Page</h1>
      


      {cookieExists ? (
        <div>
         <h2>You are logged in!</h2>
         <h3>Which means you can see this page now! </h3>
        
         <img src="doge.gif" alt="Alternate Text" />
         </div>
        
      ) : (
        <h2> Please go to the homepage, and login to see this page. </h2>
      )}

    </div>
  );
};

export default AdminPage;
