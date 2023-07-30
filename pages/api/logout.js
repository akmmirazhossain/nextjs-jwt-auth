import { removeTokenFromCookie } from '../../utils/auth';

export default function handler(req, res) {
  removeTokenFromCookie();
  res.status(200).json({ message: 'Logout successful' });
}
