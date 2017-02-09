/*
copied from link below
https://github.com/mulvster/calculateSalesTax/blob/master/calculateSalesTax.js
changed sales to salesData to what on compass function
 */
var taxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [{
  name: "Telus",
  province: "BC",
  sales: [100, 200, 400]
}, {
  name: "Bombardier",
  province: "AB",
  sales: [80, 20, 10, 100, 90, 500]
}, {
  name: "Telus",
  province: "SK",
  sales: [500, 100]
}];


// for sales we are putting in the companySalesData = sales and taxRates = taxRates
// we start by putting an empty object
// for sales data we are using a for loop of the sales
// the if statement ask does the data match the currCompany name if not then enter it into the data object
// of totaltax and Sales of that current company to get the totalTax
// else add the totalTax and totalSales to the current company getting the totalTax
function calculateSalesTax(salesData, taxRates) {
  var data = {};

  for (var i = 0; i < salesData.length; i++) {
    var companyName = salesData[i].name;
    var companyProvince = salesData[i].province;
    var companySalesSum = sum(salesData[i].sales);

    if (!data[companyName]) {
      data[companyName] = {
        totalTax: taxRates[companyProvince] * companySalesSum,
        totalSales: companySalesSum
      };
    } else {
      data[companyName]["totalTax"] += taxRates[companyProvince] * companySalesSum;
      data[companyName]["totalSales"] += companySalesSum;
    }
  }
  return data;

}
// here the function adds the total sales made before tax
function sum(arr) {
  var total = 0;

  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}


var results = calculateSalesTax(companySalesData, taxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/