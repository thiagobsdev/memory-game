export const FormatMoviment = (moviments: number) => {
    
    let movString = `${moviments < 10 ? '0'+moviments : moviments }`;

    return `${movString }`;

}