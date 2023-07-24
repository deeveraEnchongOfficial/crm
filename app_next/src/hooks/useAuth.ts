import appNext from '@/../axiosConfig';

export const login = async (email: string, password: string): Promise<{token: null | string, message: string }> => {

  try {
    const response = await appNext.post('/api/auth/login', { email, password });
    const { token, message } = response.data;
    localStorage.setItem('token', token );
    return { token, message};
  } catch (error: any) {
    const message = typeof error === 'string' ? error : error?.response?.data.message || "An error occured";
    return {token: null, message: message}
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
