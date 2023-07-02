import appNext from '../axiosConfig';
import { getToken } from '../utils/auth';

export const getUser = async (): Promise<any> => {
  const token = getToken();
  try {
    const response = await appNext.get('/api/user', {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to get User data:', error);
    throw error;
  }
};
