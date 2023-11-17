const url = process.env.NEXT_PUBLIC_APP_LINK_API;

interface FianlTestSubmitProps {
  id: number;
  username: string;
  pretest_score: number;
  course_name: string;
  code_column: string;
}

export const finalTstPost = async (payload: FianlTestSubmitProps) => {
  const response = await fetch(`${url}?action=finalTestSubmit&course=vokal-a`, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return "Hasil final test anda telah berhasil disimpan.";
  } else {
    return "Maaf terjadi kesalahan dalam proses menyimpan data. Silahkan coba lagi.";
  }
};
