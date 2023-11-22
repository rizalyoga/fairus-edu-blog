import { LoginProps } from "./../types/types";
import { StudentDataProps } from "./../types/types";
const url = process.env.NEXT_PUBLIC_APP_LINK_API;

export const getDataStudent = async (payload: LoginProps) => {
  const response = await fetch(`${url}?action=getDataStudent`);
  const data = await response.json();

  if (response.ok) {
    const newData = data.filter((student: StudentDataProps) => {
      return (
        (student.username.toLowerCase() == payload?.username?.toLowerCase() &&
          student.password == payload.password) ||
        (student.email == payload.username &&
          student.password == payload.password)
      );
    });

    return newData[0];
  }
};
