import appNext from '@/../axiosConfig';
import { getToken } from '@/hooks/useAuth'

export const getOwner = async (): Promise<any> => {
  const token = getToken();
  try {
    const response = await appNext.get('/api/owner', {
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

export const getAllUsers = () => {
  //
};

export const getUserById = () => {
  //
};

