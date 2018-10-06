/**
 * Pretty-print price.
 * 
 * @param {number} priceInCents 
 */
export function printPrice(priceInCents) {
  return (priceInCents/100).toFixed(2);
}

/**
 * Pretty-print price in BRL.
 * 
 * @param {number} priceInCents 
 */
export function printBRL(priceInCents) {
  return `R$ ${printPrice(priceInCents)}`;
}
