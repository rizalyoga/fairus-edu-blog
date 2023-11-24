import { getLessonNameVideoQuiz } from "./GetLessonsNameFromPathname";

const finalScore = (score: number) => {
  if (score > 100) {
    return 100;
  } else {
    return score;
  }
};

export const SaveScoreToSessionStorage = (score: number, pathname: string) => {
  const key = getLessonNameVideoQuiz(pathname);
  const studentFinalScore = finalScore(score);

  const studentScoreData = JSON.parse(
    sessionStorage.getItem("student-score") as string
  );

  sessionStorage.setItem(
    "student-score",
    JSON.stringify([
      {
        ...studentScoreData[0],
        [key]: studentFinalScore,
      },
    ])
  );
};
