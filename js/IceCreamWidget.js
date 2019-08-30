function IceCreamCalculator(totalAmount) {
    var totalAmount = totalFlavourPrice + totalContainerPrice + totalToppingsPrice;
    var totalFlavourPrice = 0;
    var totalContainerPrice = 0;
    var totalToppingsPrice = 0;

    function flavourPriceAddition(flavourPriceValue) {
        return totalFlavourPrice += Number(flavourPriceValue);
        
        // if (flavourPriceValue === "vanilla") {
        //     return totalFlavourPrice += 12;
        // }

        // else if (flavourPriceValue === "chocolate") {
        //     return totalFlavourPrice += 14;
        // }

        // else if (flavourPriceValue === "strawberry") {
        //     return totalFlavourPrice += 16;
        // }
    };

    function containerPriceAddition(containerPriceValue) {
        return totalContainerPrice += Number(containerPriceValue);
        
        // if (containerPriceValue === "plainCone") {
        //     return totalContainerPrice += 9;
        // }
        // else if (containerPriceValue === "sugarCone") {
        //     return totalContainerPrice += 8;
        // }

        // else if (containerPriceValue === "paperCup") {
        //     return totalContainerPrice += 7;
        // }
    };

    function toppingsPriceAddition(toppingsPriceValues) {
        return totalToppingsPrice += Number(toppingsPriceValues);
        // for (var i = 0; i < toppingsPriceValues.length; i++) {
            
        //     var toppingsPriceValues2 = toppingsPriceValues[i];
            
        //     if (toppingsPriceValues2 === "peanuts") {
        //         return totalToppingsPrice += 7;
        //     }
        //     else if (toppingsPriceValues2 === "caramel") {
        //         return totalToppingsPrice += 6;
        //     }
        //     else if (toppingsPriceValues2 === "smarties") {
        //         return totalToppingsPrice += 5;
        //     }
        //     else if (toppingsPriceValues2 === "oreos") {
        //         return totalToppingsPrice += 4;
        //     }
        //     else if (toppingsPriceValues2 === "astros") {
        //         return totalToppingsPrice += 3;
        //     }
        //};
    };

    function getTotalAmount() {
        return totalAmount
    };

    return {
        flavourPriceAddition,
        containerPriceAddition,
        toppingsPriceAddition,
        getTotalAmount
    };

};