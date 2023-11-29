export const getStudentScoreFromSessionStorage = () => {
  if (typeof window) {
    const stundentScoreData = JSON.parse(
      sessionStorage.getItem("student-score") as string
    );

    return stundentScoreData?.[0];
  }
};
