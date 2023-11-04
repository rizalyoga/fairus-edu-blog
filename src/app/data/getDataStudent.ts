import { LoginProps } from "./../types/types";
const url = process.env.NEXT_PUBLIC_APP_LINK_API;

export const getDataStudent = async (payload: LoginProps) => {
  console.log("ini payload:", payload);

  const response = await fetch(`${url}?action=getDataStudent`);
  const data = await response.json();

  if (response.ok) {
    // return JSON.stringify(response);
    console.log(data);
  }
};
