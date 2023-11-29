import { LoginProps } from "../types/types";

const url = process.env.NEXT_PUBLIC_APP_LINK_API;

export const getDataStudent = async (payload: LoginProps) => {
  const response = await fetch(`${url}?action=getDataStudentByIdLogin`, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (response.ok) {
    return data[0];
  }
};
