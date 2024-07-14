import { LoginProps } from "../types/types";
import CryptoJS from "crypto-js";

const url = process.env.NEXT_PUBLIC_APP_LINK_API;

export const getDataStudent = async (payload: LoginProps) => {
  const dataLogin = {
    username: payload.username,
    password: CryptoJS.SHA256(payload.password).toString(CryptoJS.enc.Hex),
  };
  const response = await fetch(`${url}?action=getDataStudentByIdLogin`, {
    method: "POST",
    body: JSON.stringify(dataLogin),
  });

  const data = await response.json();

  if (response.ok) {
    return data[0];
  }
};
