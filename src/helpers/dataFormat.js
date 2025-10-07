export const formatTime = (miliseconds) => {
  const seconds = Math.floor(miliseconds / 60);
  const minutes = Math.floor(seconds / 60);
  const milisecs = miliseconds % 60;
  const secs = seconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}:${String(milisecs).padStart(2, "0")}`;
};
