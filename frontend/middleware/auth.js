import { useUserAuth } from "~/stores/userAuth";

export default defineNuxtRouteMiddleware((to, from) => {
  const { userAuthToken } = useUserAuth();

  if (userAuthToken && to.name === "login") {
    return navigateTo("/");
  }

  if (!userAuthToken && to.name !== "login") {
    return navigateTo("/login");
  }
});
