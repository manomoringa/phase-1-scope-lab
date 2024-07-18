var customerName = "bob";
const favoriteCustomer = "bugaa";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "bob";
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "not bob";
}