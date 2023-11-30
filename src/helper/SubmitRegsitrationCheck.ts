interface SubmitProps {
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  id: number;
  date: string;
}

export const SubmitRegistrationCheck = (submitData: SubmitProps) => {
  if (submitData.username.length < 6) {
    return "Mohon maaf panjang username minimal 6 karakter";
  } else if (!submitData.username.charAt(0).match(/^[a-zA-Z]/)) {
    return "Mohon maaf karakter pertama Username harus berupa huruf";
  } else if (submitData.firstname.length < 3) {
    return "Mohon maaf panjang fistname minimal 3 karakter";
  } else if (submitData.firstname.match(/[^a-zA-Z]/g)) {
    return "Mohon maaf fistname memiliki karakter selain huruf alfabet";
  } else if (submitData.lastname.length < 3) {
    return "Mohon maaf panjang lastname minimal 3 karakter";
  } else if (submitData.lastname.match(/[^a-zA-Z]/g)) {
    return "Mohon maaf lastname memiliki karakter selain huruf alfabet";
  } else if (submitData.password.length < 8) {
    return "Mohon maaf panjang password minimal 8 karakter";
  }
};
