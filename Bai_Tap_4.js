/**
 *  Bài 4: Tính diện tích, chu vi hình chữ nhật
 *  - Đầu vào
 *      + chieuDai = 10
 *      + chieuRong = 10
 *  - Xử lý
 *      + dienTich = chieuDai * chieuRong
 *      + chuVi = (chieuDai + chieuRong) * 2
 *  - Đầu ra
 *      + show dienTich
 *      + show chuVi
 */

// Đầu vào
var chieuDai = 16;
var chieuRong = 18;

// Xử lý
var dienTich = chieuDai * chieuRong;
var chuVi = (chieuDai + chieuRong) * 2;

var result_DienTich = 'Dien tich HCN la ' + dienTich;
var result_ChuVi = 'Chu vi HCN la ' + chuVi;
var result4 = result_DienTich + ' va ' + result_ChuVi;

// Đầu ra
console.log(result4);

