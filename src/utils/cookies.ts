// Gemmer en cookie med navn, værdi og udløbsdato
export const setCookie = (
    name: string, 
    value: string, 
    days: number = 7
): void => {
    const expires:Date = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
}

// Henter værdien af en cookie baseret på navn
export const getCookie = (name: string): string | null => {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');

    for (const cookie of cookies) {
        const trimmed = cookie.trim()
        if(trimmed.indexOf(nameEQ) === 0) {
            return trimmed.substring(nameEQ.length);
        }
    }
    return null;
}

// Sletter en cookie ved at sætte udløbsdato til fortiden
export const deleteCookie = (name:string): void => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}