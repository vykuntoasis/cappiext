const cds = require('@sap/cds');

module.exports = cds.service.impl(async function(){

    const { Products } = this.entities;

    const service = await cds.connect.to('Northwind');

    this.on('READ',Products,async (request) => {

        // Check prechecks make filters authorization security

        var data = await service.tx(request).run(request.query);

        console.log(data);
        data.push ({
                "ProductID": 100,
                "ProductName": "anubhav",
                "SupplierID": 1,
                "CategoryID": 1,
                "QuantityPerUnit": "10 boxes x 20 bags",
                "UnitPrice": "18.0000",
                "UnitsInStock": 39,
                "UnitsOnOrder": 0,
                "ReorderLevel": 10,
                "Discontinued": false
        })

        return data;
    })
})