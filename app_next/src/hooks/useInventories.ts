import appNext from '@/../axiosConfig';
import { getToken } from '@/hooks/useAuth'

export const getTransactions = async (): Promise<any> =>{   
    const token = getToken();
    try{
        const response = await appNext.get('/api/inventories', {
            headers: {
                Authorization: `Bearer ${token}`
              },
        })
        return response.data
    }catch(err){
        console.error(err)
        throw err;
    }
};


