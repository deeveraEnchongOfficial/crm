import { useUserAuth } from '~/stores/userAuth'
export default async function useUser(path) {
  const { $upsale } = useNuxtApp()
  const { userAuthToken  } = useUserAuth();
  const userLoggedIn = reactive({
    user: null,
    isLoggedIn: false
  })

  const user = async () => {
    const token = userAuthToken;
    try {
      const response = await $upsale.get('/api/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      userLoggedIn.user = response.data 
      userLoggedIn.isLoggedIn = true
      return response.data 
    } catch (error) {
      userLoggedIn.user = null
      userLoggedIn.isLoggedIn = false
    }
  }

  return {
    user,
    userLoggedIn,
  };
}
