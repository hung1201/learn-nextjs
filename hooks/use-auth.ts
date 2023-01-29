import { authApi } from "@/api-client";
import useSwr from "swr";

export function useAuth(options?: any) {
  const { data, error, mutate } = useSwr(`/profile`, {
    ...{
      dedupingInterval: 60 * 60 * 1000,
      revalidateOnFocus: false,
      ...options,
    },
  });
  const firstLoading = data === undefined && error === undefined;
  async function login() {
    await authApi.login({
      username: "test123",
      password: "abc123",
    });
    // wait for trigger request swr to get profile
    await mutate();
  }
  async function logout() {
    await authApi.logout();
    // clear data and not trigger swr
    mutate({}, false);
  }
  return {
    profile: data,
    error,
    login,
    logout,
    firstLoading,
  };
}
