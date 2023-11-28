import { hasCookie } from "cookies-next";

export const GET_USER_AUTH = () => {
  const USER_AUTH = hasCookie("user_auth");

  return USER_AUTH;
};
