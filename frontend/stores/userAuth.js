import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useUserAuth = defineStore("userAuth", () => {
  const router = useRouter();
  const { $upsale } = useNuxtApp();

  const errorBag = reactive({ message: "", status: false, errors: [] });

  const userAuthToken = ref(useStorage("userAuthToken", null));

  const getCookie = async () => {
    await $upsale.get("/sanctum/csrf-cookie");
  };

  const login = async (data) => {
    try {
      const res = await $upsale.post("/api/auth/login", {
        email: data.email,
        password: data.password,
      });
      userAuthToken.value = res.data.token;
      router.push('/')
    } catch (e) {
      console.log("error", e.response.data);
      if (e.response.data.errors) {
        Object.assign(errorBag, e.response.data);
      }else{
        Object.assign(errorBag, { errors: null , message: e.response.data.message });
      }
    }
  };

  const logout = async () => {
    const token = userAuthToken;
    console.log('token', token.value);
    try {
      const response = await $upsale.post('/api/auth/logout', {}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token.value}`
        }
    });
      userAuthToken.value = null;
      return response.data;
    } catch (error) {
      console.log(error);
    } finally{
      router.push('/login')
    }
  }

  return { userAuthToken, errorBag, login, logout, getCookie };
});
