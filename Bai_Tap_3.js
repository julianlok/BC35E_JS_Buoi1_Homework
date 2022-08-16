/**
 *  Bài 3: Quy đổi tiền
 *  - Đầu vào
 *      + vndExchangeRate = 23.500
 *      + usdCurrency = 2
 *  - Xử lý
 *      + currencyConvert = vndCurrency * usdExchangeRate
 *  - Đầu ra
 *      + show currencyConvert
 */

// Đầu vào
var vndExchangeRate = 23500;
var usdCurrency = 2;

// Xử lý
var currencyConvert = usdCurrency * vndExchangeRate;

var result3 = '2USD Quy ra: ' + currencyConvert + 'VND';

// Đầu ra
console.log(result3);