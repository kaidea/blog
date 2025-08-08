const formatDurationExtended = (milliseconds: number) => {
  const oneSecond = 1000;
  const oneMinute = 60 * oneSecond;
  const oneHour = 60 * oneMinute;

  const ms = Number(milliseconds);

  const hours = Math.floor(ms / oneHour);
  const minutes = Math.floor((ms % oneHour) / oneMinute);
  const seconds = Math.floor((ms % oneMinute) / oneSecond);
  const msecs = ms % oneSecond;

  const result:any = [];

  if (hours > 0) result.push(`${hours} h`);
  if (minutes > 0 || hours > 0) result.push(`${minutes} m`);
  if (seconds > 0 || minutes > 0 || hours > 0) result.push(`${seconds} s`);
  if (msecs > 0) result.push(`${msecs} ms`);

  return result.join(' ');
} 
console.log(formatDurationExtended("4000"))
