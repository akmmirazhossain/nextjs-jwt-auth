import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';

const SECRET_KEY = 'chickentikkamasalla987'; // Replace this with your actual secret key
const TOKEN_NAME = 'akm-jwt-token'; // Name of the cookie to store the JWT token

export function createToken(data) {
  return jwt.sign(data, SECRET_KEY, { expiresIn: '1h' }); // Adjust the expiration time as needed
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null; // Invalid token or token expired
  }
}

export function saveTokenToCookie(token) {
  Cookies.set(TOKEN_NAME, token, { expires: 1 }); // Save the token in a cookie with 1 day expiration
}

export function getTokenFromCookie() {
  return Cookies.get(TOKEN_NAME);
}

export function removeTokenFromCookie() {
  Cookies.remove(TOKEN_NAME);
}
