//przerobić na obiekt?
const productsInput = document.querySelector("#quantity");
const ordersInput = document.querySelector("#estimated-orders");
const packageInput = document.querySelector("#package");
const accountingCheckbox = document.querySelector("#calculator-accounting-checkbox");
const terminalCheckbox = document.querySelector("#calculator-terminal-checkbox");

const productsValueCalculations = document.querySelector("#products-value-calculations");
const productsPrice = document.querySelector("#products-price");

const ordersValueCalculations = document.querySelector("#orders-value-calculations");
const ordersPrice = document.querySelector("#orders-price");

const packageType = document.querySelector("#package-type");
const packagePrice = document.querySelector("#package-price");

const basicPackage = document.querySelector("#calculator-option-basic").value;
const professionalPackage = document.querySelector("#calculator-option-professional").value;

const accountingPrice = document.querySelector("#accounting-price");
const terminalPrice = document.querySelector("#terminal-price");

const totalPrice = document.querySelector("#total-price");

const productValue = 0.5;
const orderValue = 0.25;
const basicPackagePrice = 40;
const professionalPackagePrice = 60;
const premiumPackagePrice = 100;
const accountingCost = 35;
const terminalCost = 10;


let sumProducts;
let sumOrders;
let sumPackage;
let sumAccounting;
let sumRental;

const sumTotalPrice = () => {
    let result = parseFloat(sumProducts) + parseFloat(sumOrders) + parseFloat(sumPackage) + parseFloat(sumAccounting) + parseFloat(sumRental);
    totalPrice.innerText = 'Total: ' + result + '$' ;
}

// Połącz tę funkcję w jedną - "countings" albo coś
const countPriceOfProducts = () => {
    productsInput.addEventListener("keyup", () => {
        if (Number.isInteger(parseFloat(productsInput.value)) && parseFloat(productsInput.value) > 0) {
            productsValueCalculations.innerText = `${productsInput.value} * ${productValue}$`
            productsPrice.innerText = productsInput.value * productValue
            sumProducts = 0
            sumProducts = productsInput.value * productValue
            sumTotalPrice();
        } else {
            productsValueCalculations.innerText = "";
            productsPrice.innerText = ""
        }
    })
}

const countPriceOfOrders = () => {
    ordersInput.addEventListener("keyup", () => {
        if (Number.isInteger(parseFloat(productsInput.value)) && parseFloat(productsInput.value) > 0) {
            ordersValueCalculations.innerText = `${ordersInput.value} * ${orderValue}$`
            ordersPrice.innerText = ordersInput.value * orderValue
            sumOrders = 0;
            sumOrders = ordersInput.value * orderValue
            sumTotalPrice();
        } else {
            ordersValueCalculations.innerText = "";
            ordersPrice.innerText = ""
        }
    })
}

const addPackagePrice = () => {
    packageInput.addEventListener("change", () => {
        packageType.innerText = packageInput.value;
        if (packageInput.value === basicPackage) {
            packagePrice.innerText = basicPackagePrice;
            sumPackage = 0
            sumPackage = basicPackagePrice;
            sumTotalPrice();
        } else if (packageInput.value === professionalPackage) {
            packagePrice.innerText = professionalPackagePrice;
            sumPackage = 0
            sumPackage = professionalPackagePrice;
            sumTotalPrice();
        } else {
            packagePrice.innerText = premiumPackagePrice;
            sumPackage = 0
            sumPackage = premiumPackagePrice;
            sumTotalPrice();
        }
    })
}

const addAccountingPrice = () => {
    accountingCheckbox.addEventListener("change", ()=> {
        if (!accountingCheckbox.checked) {
            accountingPrice.innerText = "";
        } else {
            accountingPrice.innerText = accountingCost;
        }
    })
}

const addTerminalPrice = () => {
    terminalCheckbox.addEventListener("change", () => {
        if (!terminalCheckbox.checked) {
            terminalPrice.innerText = "";
        } else {
            terminalPrice.innerText = terminalCost;
        }
    })
}


countPriceOfProducts();
countPriceOfOrders();
addPackagePrice();
addAccountingPrice();
addTerminalPrice();