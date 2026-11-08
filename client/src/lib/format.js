export const formatPrice=(price)=> {
const numericPrice = parseFloat(price);

if (isNaN(numericPrice)) return '$0.00';

return `$${numericPrice.toFixed(2)}`;
}