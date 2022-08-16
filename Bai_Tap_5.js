/**
 *  Bài 5: Tính tổng 2 ký số
 *  - Đầu vào
 *      + n = 28;
 *  - Xử lý
 *      + hangChuc = Math.floor(n / 10);
 *      + hangDV = Math.floor(n % 10);
 * 
 *      + sum = hangChuc + hangDV;
 *  - Đầu ra
 *      + show sum
 */

// Đầu vào
var n = 28;

// Xử lý
var hangChuc = Math.floor(n / 10);
var hangDV = Math.floor(n % 10);
var sum = hangChuc + hangDV;

var result5 = 'Tong 2 ky so: ' + sum

// Đầu ra
console.log(result5);
