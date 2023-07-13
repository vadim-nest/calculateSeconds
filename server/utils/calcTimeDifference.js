function calcTimeDifference({ timeFirst, timeLast }) {
  const seconds =
    Math.abs(new Date(timeFirst).getTime() - new Date(timeLast).getTime())
    / 1000;
  return seconds;
}

module.exports = calcTimeDifference;
