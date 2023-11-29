export const getStudentScoreFromSessionStorage = () => {
  const stundentScoreData = JSON.parse(
    sessionStorage.getItem("student-score") as string
  );

  return stundentScoreData[0];
};
