/**
 * Formaterer et tal til dansk valuta (DKK)
 * @param {number} value - Beløb der skal formateres
 * @returns {string} - Fx "DKK 100,00"
 */
export const price2Dkk = (
  value: string
): string => {
  // Formaterer tallet til dansk valuta
  return new Intl.NumberFormat('da-DK', {
    style: 'currency',      // Angiver at det er valuta
    currency: 'DKK',        // Dansk krone
    currencyDisplay: 'code' // Viser "DKK" i stedet for "kr."
  }).format(Number(value));
}