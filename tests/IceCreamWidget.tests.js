describe("IceCreamCalculator", function() {
    it("It should be able to add to the grand total the price of the vanilla flavour.", function() {

        let factoryInstance = IceCreamCalculator();

        assert.equal(12, factoryInstance.flavourPriceAddition('flavour'));
        assert.equal(14, factoryInstance.flavourPriceAddition('flavour'));
        assert.equal(16, factoryInstance.flavourPriceAddition('flavour'));

    });

    it("It should be able to add to the grand total the price of the chocolate flavour.", function() {
        
    });

    it("It should be able to add to the grand total the price of the strawberry flavour.", function() {
        
    });

    it("It should be able to add to the grand total the price of the plain cone container.", function() {
        
    });

    it("It should be able to add to the grand total the price of the plain cone container.", function() {
        
    });

});