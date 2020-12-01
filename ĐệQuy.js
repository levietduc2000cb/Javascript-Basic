/**
 * Đệ quy là hàm gọi lại chính nó
 * Vấn đề cảu đệ quy
 * 1. Xác định được điểm dừng
 * 2. Logic handle => Tạo ra điểm dừng
 */
function run(x, y) {
    if(x < y-1)
    {
       var a = [x+1];
        return a.concat(run(x+1,y));
    }
    return [];
}



 /*
// Hàm đệ quy giai thừa
function factorial(number) {
    
    if(number > 0)
    {
        return number * factorial(number-1)
    }
    return 1;

}
console.log(factorial(3));
*/

/*var array =['1','2','3','1','2','3'];
console.log([...(new Set(array))])*/