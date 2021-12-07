// function to convert miliseconds to minutes and seconds
export function milisecondsToMinutesAndSeconds(miliseconds) {
    var minutes = Math.floor(miliseconds / 60000);
    var seconds = ((miliseconds % 60000) / 1000).toFixed(0);
    return seconds == 60 ? (minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}