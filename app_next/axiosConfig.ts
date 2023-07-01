import axios, { AxiosInstance } from 'axios';

// Create an instance of axios with custom configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Use the environment variable as the base URL
  // You can add additional configuration options here, such as headers
});

export default axiosInstance;
