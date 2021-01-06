import { asyncForEach } from "./extenders";
import { unpersist } from "./storage";

export const AUTH_KEYS = {
  USER_DATA: "userData",
  TOKEN: "token",
  FCM: "fcmToken",
  IS_LOGGED: "isLoggedIn",
};

export const handleLogout = async () => {
  await asyncForEach<string>(Object.values(AUTH_KEYS), async (value) => {
    await unpersist(value);
  });
};
