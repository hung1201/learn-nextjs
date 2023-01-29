import { LoginPayload } from "@/models";
import axiosCLient from "./axios-client";

export const authApi = {
  login(payload: LoginPayload) {
    return axiosCLient.post("/login", payload);
  },
  logout() {
    return axiosCLient.post("/logout");
  },
  getProfile() {
    return axiosCLient.get("/profile");
  },
};
