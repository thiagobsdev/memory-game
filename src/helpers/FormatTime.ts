export const FormatTimeElapsed = (seconds: number) => {
    let minutes = Math.floor( seconds / 60);
    let secondsSTR = ( seconds >= 60) ? seconds - (60 * minutes) : seconds;


    let minutesString = `${minutes < 10 ? '0'+minutes : minutes }`;
    let secondsString = `${secondsSTR < 10 ? '0'+secondsSTR : secondsSTR }`;

    return `${minutesString}:${secondsString}`;

}