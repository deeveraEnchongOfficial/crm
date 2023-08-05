import appNext from '@/../axiosConfig';
import { getToken } from '@/hooks/useAuth';

export const getTransactions = async (search?: string, currentPage?: number, perPage?: number): Promise<any> => {  
    const token = getToken();
    try {
        const params: any = {}; // Initialize an empty object to store the query parameters

        // Add the 'search' parameter to the query if provided
        if (search) {
            params.search = search;
        }

        // Add the 'currentPage' parameter to the query if provided
        if (currentPage) {
            params.page = currentPage;
        }

        // Add the 'perPage' parameter to the query if provided
        if (perPage) {
            params.perPage = perPage;
        }

        const response = await appNext.get('/api/inventories', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params, // Pass the query parameters to the API call
        });

        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};
