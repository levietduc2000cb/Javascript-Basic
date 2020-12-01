/**
 * Vòng lặp - Loop
 * - For - lặp với điều kiện đúng
 * - For/in - Lặp qua key của đối tượng
 * - For/of - Lặp qua value của đối tượng
 * - While - Lặp khi điệu kiện đúng
 * - Do/while - Lặp ít nhất một lần sau đó lặp khi điều kiện đúng
 */
var myInfo = 
{
    name : 'Duc Lee',
    age : 18,
    address : 'Ha Noi'
}
var language = 
[
    'Java',
    'Python',
    'C++'
]
for (var i = 1 ; i <= 10; i++)
{
    console.log(i);
}
for (var key in myInfo)
{
    console.log(key);
}
for (var value of language)
{
    console.log(value);
}