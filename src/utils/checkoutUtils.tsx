import {SEATTLE_SALES_TAX_RATE} from './taxRates';

let calculateTaxAndTotals = cart => {
  let subtotal = 0;
  let tax;
  let total;

  cart.forEach(item => {
    let quantity = Number(item.quantity);
    let cost = Number(item.cost);

    subtotal += quantity * cost;
  });

  tax = subtotal * SEATTLE_SALES_TAX_RATE;
  total = subtotal + tax;

  return [subtotal, tax, total];
};

export {calculateTaxAndTotals};
