import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    const response = await axios.post('http://localhost:8000/api/auth/login', req.body);
    const { token } = response.data;
    // Set token in session or local storage
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(401).json({ message: 'Invalid email or password' });
  }
}
