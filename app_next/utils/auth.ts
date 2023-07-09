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

export const logout = async (): Promise<any>=> {
  const token = getToken();
  try{
    await appNext.post('api/auth/logout', {}, {
      headers:{
        Authorization: `Bearer ${token}`
      },
    })
  }catch(err){
    console.log(err)
  }
  localStorage.removeItem('token')
};

export const getToken = (): string | null => {
  return localStorage.getItem('token');
};
