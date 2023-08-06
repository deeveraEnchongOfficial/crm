import appNext from '@/../axiosConfig';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const signup = async (firstName: string, middleName: string, lastName: string, email: string, password: string, password_confirmation: string): Promise<{message: string, firstNameMessage: string | any, lastNameMessage: string | any,
  emailMessage: string | any,  passwordMessage: string |any, passwordConfirmationMessage: string |any}>  =>{
  try{
    const response = await appNext.post('api/auth/register', { firstName, middleName, lastName, email, password, password_confirmation });
    const { message } = response.data;
    return { message, firstNameMessage: "", lastNameMessage: "", emailMessage: "", passwordMessage: "",passwordConfirmationMessage: ""};
  } catch(error: any){
    const { message } = typeof error === 'string' ? error : error?.response?.data.message || "An error occured";
    let { firstName, lastName, email, password } = typeof error?.response?.data.data === 'object' ? error?.response?.data.data : error?.response?.data.data || "An error occured";
    password = password[0]
    let passwordConfirmation = password[1]
    return { message: message, firstNameMessage: firstName, lastNameMessage:lastName, emailMessage: email, passwordMessage: password, passwordConfirmationMessage: passwordConfirmation }
  }
}

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

export const useAuth = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Initialize the state to false

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuthenticated = !!getToken(); // Convert the token value to a boolean
      if (!isAuthenticated && !(currentPath == '/auth/login' || currentPath == '/auth/signup')) {
        router.push('/auth/login');
      }
      setIsAuthenticated(isAuthenticated); // Update the state with the authentication status
    };

    checkAuthentication();
  }, [router, currentPath]);

  // Return the authentication status as well
  return { isAuthenticated };
};