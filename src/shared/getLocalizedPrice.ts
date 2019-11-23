export function getLocalizedPrice(
    price: number,
    currencySymbol: string = 'Р',
    currencyCode: string = 'RUB',
    locale: string = 'ru'
): string {
    const localizedPrice = price.toLocaleString(locale, {
        currency: currencyCode,
    });
    return `${localizedPrice} ${currencySymbol}`;
}
