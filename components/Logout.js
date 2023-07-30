const Logout = () => {
    const handleLogout = () => {
      // Handle logout logic here, such as clearing user authentication tokens or session data
      console.log('Logging out...');
      // You can implement the actual logout logic according to your authentication method (e.g., clearing tokens, cookies, etc.)
    };
  
    return <button onClick={handleLogout}>Logout</button>;
  };
  
  export default Logout;
  