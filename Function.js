/*
Hàm :
-Là một khối mã
-Làm 1 việc cụ thể
Phân loại :
Gồm 2 loại hàm:
-Built-in 
-Tự định nghĩa
Tính chất của hàm :
-không thực thi khi được định nghĩa
-Sẽ thực thi khi được gọi
-Có thể nhận tham số
-Có thể trả về một giá trị
*/
/*
Polyfill

if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';

    if (search instanceof RegExp) {
      throw TypeError('first argument must not be a RegExp');
    } 
    if (start === undefined) { start = 0; }
    return this.indexOf(search, start) !== -1;
  };
}
*/
function stringInString(needle,haystack)
{
    if(haystack.indexOf(needle) >= 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
var result = stringInString('Javascript', 'Học Javascript tại F8');
console.log(result);
function stringInString(needle,haystack)
{
    if(haystack.indexOf(needle) >= 0)
    {
        return true;
    }
    return false;
}
stringInString();