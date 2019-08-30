var vanillaButtonElem = document.querySelector(".vanillaButton");
var chocolateButtonElem = document.querySelector(".chocolateButton");
var strawberryButtonElem = document.querySelector(".strawberryButton");

var plainConeButtonElem = document.querySelector(".plainConeButton");
var sugarConeButtonElem = document.querySelector(".sugarConeButton");
var paperCupButtonElem = document.querySelector(".paperCupButton");

var peanutsButtonElem = document.querySelector(".peanutsButton");
var caramelButtonElem = document.querySelector(".caramelButton");
var smartiesButtonElem = document.querySelector(".smartiesButton");
var oreosButtonElem = document.querySelector(".oreosButton");
var astrosButtonElem = document.querySelector(".astrosButton");

var priceButtonElem = document.querySelector(".priceButton");
var totalPriceElem = document.querySelector(".totalPrice");

// if(localStorage['grandTotal'] !== undefined) {
//     var grandTotal = JSON.parse(localStorage['grandTotal'])
// }

// else {
//     grandTotal = 0;
// }


let factoryInstance = IceCreamCalculator(totalPriceElem);

function priceCalculation() {
    
    var flavourPrice = document.querySelector("input[name='flavour']:checked");
    totalPriceElem.innerHTML = factoryInstance.flavourPriceAddition(flavourPrice);

    var containerPrice = document.querySelector("input[name='container']:checked");
    totalPriceElem.innerHTML = factoryInstance.containerPriceAddition(containerPrice);

    var toppingsPrice = document.querySelector("input[name='toppings']:checked");
    totalPriceElem.innerHTML = factoryInstance.toppingsPriceAddition(toppingsPrice);

   // localStorage['grandTotal'] = JSON.stringify(factoryInstance.getTotalAmount());
};

priceButtonElem.addEventListener('click', priceCalculation);
