import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Button } from '@mui/material';

const TopNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/" passHref>
          <Button color="inherit">Home</Button>
        </Link>
        <Link href="/about" passHref>
          <Button color="inherit">About</Button>
        </Link>
        <Link href="/contact" passHref>
          <Button color="inherit">Contact</Button>
        </Link>
        <Link href="/adminpage" passHref>
          <Button color="inherit">Admin</Button>
        </Link>
        {/* Add more buttons and links as needed */}
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;