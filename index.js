// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}


function setBestCustomer() {
    return bestCustomer = "not bob";
}

function overwriteBestCustomer() {
    return bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'tom'; 
function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = 'tim';
}
//this throws TypeError: Assignment to constant variable.