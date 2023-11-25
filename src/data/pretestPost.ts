const url = process.env.NEXT_PUBLIC_APP_LINK_API;

interface PretestSubmitProps {
  id: number;
  username: string;
  pretest_score: number;
  lessons_name: string;
}

export const pretestPost = async (payload: PretestSubmitProps) => {
  const response = await fetch(`${url}?action=pretestSubmit`, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return "Hasil pretest anda telah berhasil disimpan.";
  } else {
    return "Maaf terjadi kesalahan. Silahkan coba lagi.";
  }
};
