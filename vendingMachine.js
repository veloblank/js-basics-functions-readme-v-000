function vendingMachine (snackSelection, moneyInserted) {
  if (validateSelection(snackSelection) === false) {
    return 'Please select a valid snack.';
  }

  const price = getPrice(snackSelection);

  if (price > moneyInserted) {
    return `Please insert more to purchase ${snackSelection}.`;
  }

  const change = moneyInserted - price;

  return `${snackSelection} dispensed. Your change is ${change}. Thank you!`;
}

function validateSelection (selection) {
  switch (selection) {
    case 'Pretzels':
    case 'Chips':
    case 'Water':
      return true;
    default:
      return false;
  }
}
function getPrice (selection) {
  switch (selection) {
    case 'Pretzels':
      return 100;
    case 'Chips':
      return 75;
    case 'Water':
      return 50;
  }
}