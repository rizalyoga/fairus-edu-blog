const url = process.env.NEXT_PUBLIC_APP_LINK_API;

interface FinalTestSubmitProps {
  id: number;
  username: string;
  final_test_score: number;
  lessons_name: string;
}

export const finalTestPost = async (payload: FinalTestSubmitProps) => {
  const response = await fetch(
    `${url}?action=finalTestSubmit&course=${payload.lessons_name}`,
    {
      method: "POST",
      body: JSON.stringify(payload),
    }
  );

  if (response.ok) {
    return `Hasil final test anda adalah ${payload.final_test_score} poin dan telah berhasil disimpan`;
  } else {
    return "Maaf terjadi kesalahan dalam proses menyimpan data. Silahkan coba lagi.";
  }
};
