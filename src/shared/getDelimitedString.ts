export function getDelimitedText(
    textParts: string[],
    delimiter: string = ', '
): string {
    return textParts.join(delimiter);
}
