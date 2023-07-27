import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here, such as sending login credentials to the server
//     console.log('Email:', email);
//  console.log('Password:', password);
//     // You can implement the actual login logic using API calls or any other method appropriate for your application
//   };


const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log('Password:', password);

    // fetch('/api/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    //   })

//     console.log('Email:', email);
//  console.log('Password:', password);

    // try {
    //   const response = await fetch('/api/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });

    // //   const data = await response.json();

    // //   if (response.ok) {
    // //     // Handle successful login
    // //     console.log('Login successful');
    // //     console.log('User data:', data);
    // //     // You can store the user data in state, context, or local storage, depending on your application's architecture
    // //   } else {
    // //     // Handle login error
    // //     console.log('Login failed:', data.message);
    // //     // You can display an error message to the user or take other actions based on the error response from the server
    // //   }
    // } 
    
    // catch (error) {
    //   console.error('Error occurred:', error);
    //   // Handle any network or unexpected errors that might occur during the API call
    // }
  };


  //<form onSubmit={handleSubmit}>

  return (
    <form method="POST" action="/api/login">
      <div>
        <label>Email:</label>
        <input type="text" name="username" value="miraz" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value="45646" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
