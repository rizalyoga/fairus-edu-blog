const url = "/dashboard/vokal-a";

console.log(url.includes("vokal-b"));

const score = [33, 33, 0];
const score1 = [33, 0, 0];
const score2 = [33, 33, 33];

const totalScore = score.reduce((a, b) => a + b, 0);
const totalScore1 = score1.reduce((a, b) => a + b, 0);
const totalScore2 = score2.reduce((a, b) => a + b, 0);

console.log(Math.round(totalScore));
console.log(Math.round(totalScore1));
console.log(Math.round(totalScore2));
