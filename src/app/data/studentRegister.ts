import { RegisterProps } from "../types/types";
const url = process.env.NEXT_PUBLIC_APP_LINK_API;

export const addNewStudent = async (payload: RegisterProps) => {
  const response = await fetch(`${url}?action=addNewStudent`, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return "Anda telah berhasil mendaftar.";
  } else {
    return "Maaf anda gagal Mendaftar";
  }
};
