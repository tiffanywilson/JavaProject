var taxRate = .10;
var phonePrice = 100;
var accessoryPrice = 20;
var spendingThreshold = 400;
var bankBalance = 500;



function requestOrder() {
    var phoneInput = window.prompt('How many phones would you like to purchase?', 'Enter total here');
    var accessoryInput = window.prompt('How many accessories would you like to purchase?', 'Enter total here');
    var purchaseTotal = (phoneInput + accessoryInput) += taxRate;
    console.log(purchaseTotal);
}