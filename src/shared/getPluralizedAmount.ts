export function getPluralAmount(amount: number, pluralForms: string[]): string {
    const restOfHundreds = Math.abs(amount) % 100;
    const restOfTens = restOfHundreds % 10;

    if (restOfHundreds > 10 && restOfHundreds < 20) {
        return pluralForms[2];
    }
    if (restOfTens > 1 && restOfTens < 5) {
        return pluralForms[1];
    }
    if (restOfTens === 1) {
        return pluralForms[0];
    }
    return pluralForms[2];
}
