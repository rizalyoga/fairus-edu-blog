import { getLessonNameVideoQuiz } from "@/helper/GetLessonsNameFromPathname";

const url = process.env.NEXT_PUBLIC_APP_LINK_API;

const finalScore = (score: number) => {
  if (score > 100) {
    return 100;
  } else {
    return score;
  }
};

export const quizTestPost = async (
  quiz_test_score: number,
  pathname: string
) => {
  const lessons_name = getLessonNameVideoQuiz(pathname);
  const studentQuizScore = finalScore(quiz_test_score);
  const studentData = JSON.parse(sessionStorage.getItem("student") as string);

  console.log(pathname);
  console.log(lessons_name);

  const newData = {
    id: studentData.id,
    username: studentData.username,
    quiz_test_score: studentQuizScore,
    lessons_name: lessons_name,
  };

  const response = await fetch(
    `${url}?action=quizTestSubmit&course=${lessons_name}`,
    {
      method: "POST",
      body: JSON.stringify(newData),
    }
  );

  if (response.ok) {
    return `Hasil quiz tes anda adalah ${studentQuizScore} poin dan telah berhasil disimpan`;
  } else {
    return "Maaf terjadi kesalahan dalam proses menyimpan data. Silahkan coba lagi.";
  }
};
