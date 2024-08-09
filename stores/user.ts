import { defineStore } from "pinia";
import type { User } from "~/types";
export const useUserStore = defineStore("user", () => {
  const user = ref();
  const token = useCookie("MY_COOKIE", {
    maxAge: 60 * 60,
  });
  const setToken = (data?: string) => (token.value = data);
  const setUser = (data?: any) => (user.value = data);
  const signIn = async (data: any) => {
    try {
      const res = await $fetch<User>("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
          expiresInMins: 30,
        }),
      });
      setToken(res.token);
      await fetchCustomer();
    } catch (error) {
      setToken();
      setUser();
      console.log(error);
    }
  };
  const fetchCustomer = async () => {
    if (token.value) {
      try {
        const res = await $fetch<any>("https://dummyjson.com/users/1");
        setUser(res);
      } catch (error) {
        setUser()
        console.log(error);
        
      }
    }
  };
  const logout = () => {
    setToken();
    setUser();
  };
  return { user, token, signIn, logout, fetchCustomer, setUser, setToken };
});
