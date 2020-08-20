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


let sumProducts = 0;
let sumOrders = 0;
let sumPackage = 0;
let sumAccounting = 0;
let sumTerminal = 0;




const sumTotalPrice = () => {
    totalPrice.parentElement.style.visibility = "visible";
    let result = sumProducts + sumOrders + sumPackage + sumAccounting + sumTerminal;
    totalPrice.innerText = result + '$' ;
}

// Połącz tę funkcję w jedną - "countings" albo coś
const countPriceOfProducts = () => {
    productsInput.addEventListener("input", () => {
        if (Number.isInteger(parseFloat(productsInput.value)) && parseFloat(productsInput.value) > 0) {
            productsValueCalculations.parentElement.style.visibility = "visible";
            productsValueCalculations.innerText = `${productsInput.value} * ${productValue}$`
            productsPrice.innerText = productsInput.value * productValue + "$"
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
            if (Number.isInteger(parseFloat(ordersInput.value)) && parseFloat(ordersInput.value) > 0) {
            ordersValueCalculations.parentElement.style.visibility = "visible";
            ordersValueCalculations.innerText = `${ordersInput.value} * ${orderValue}$`
            ordersPrice.innerText = ordersInput.value * orderValue + "$"
            sumOrders = 0;
            sumOrders = ordersInput.value * orderValue
            sumTotalPrice();
        } else if (ordersInput === "") {
            console.log("jest tak");
            sumOrders = 0;
            sumTotalPrice;
            ordersValueCalculations.parentElement.style.visibility = "hidden";
            ordersPrice = "";
        } else {
            console.log("jest nie");
            ordersValueCalculations.innerText = "";
            ordersPrice.innerText = ""
        }
    })
}

const addPackagePrice = () => {
    packageInput.addEventListener("change", () => {
        packageType.innerText = packageInput.value;
        sumPackage = 0
        packagePrice.parentElement.style.visibility = "visible";
        if (packageInput.value === basicPackage) {
            packagePrice.innerText = basicPackagePrice + "$";
            sumPackage = basicPackagePrice;
            sumTotalPrice();
        } else if (packageInput.value === professionalPackage) {
            packagePrice.innerText = professionalPackagePrice + "$";
            sumPackage = professionalPackagePrice;
            sumTotalPrice();
        } else {
            packagePrice.innerText = premiumPackagePrice + "$";
            sumPackage = premiumPackagePrice;
            sumTotalPrice();
        }
    })
}

const addAccountingPrice = () => {
    accountingCheckbox.addEventListener("change", ()=> {
        sumAccounting = 0;
        if (!accountingCheckbox.checked) {
            accountingPrice.parentElement.style.visibility = "hidden"
            accountingPrice.innerText = "";
            sumTotalPrice();
        } else {
            accountingPrice.parentElement.style.visibility = "visible";
            accountingPrice.innerText = accountingCost + "$";
            sumAccounting = accountingCost;
            sumTotalPrice()
        }
    })
}

const addTerminalPrice = () => {
    terminalCheckbox.addEventListener("change", () => {
        sumTerminal = 0;
        if (!terminalCheckbox.checked) {
            terminalPrice.parentElement.style.visibility = "hidden"
            terminalPrice.innerText = "";
            sumTotalPrice();
        } else {
            terminalPrice.parentElement.style.visibility = "visible"
            terminalPrice.innerText = terminalCost + "$";
            sumTerminal = terminalCost;
            sumTotalPrice();
        }
    })
}


countPriceOfProducts();
countPriceOfOrders();
addPackagePrice();
addAccountingPrice();
addTerminalPrice();