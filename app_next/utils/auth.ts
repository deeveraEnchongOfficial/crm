import appNext from '../axiosConfig';

export const login = async (email: string, password: string): Promise<string | null> => {
  try {
    const response = await appNext.post('/api/auth/login', { email, password });
    const { token } = response.data;

    localStorage.setItem('token', token);
    return token;
  } catch (error) {
    console.error('Login failed:', error);
    return null;
  }
};

export const logout = (): void => {
  localStorage.removeItem('token');
};

export const getToken = (): string | null => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};
