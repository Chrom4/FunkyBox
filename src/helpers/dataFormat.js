export const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  const rest_secs = totalSeconds % 15

  const timeString = `${String(rest_secs).padStart(2, "0")}`;

  return {
    timeStr: timeString,  // A string bonita "01:30"
    seconds: rest_secs // O número puro (ex: 90)
  };
};