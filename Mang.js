var anArray = [1,2,3];
var result ;
if(anArray.length == 0)
{
    anArray.push('Cat','Mouse');
}
else if(anArray.length == 1)
{
    anArray.unshift('Elephant');
}
else
{
    anArray.splice(1,1,'Monkey','Tiger');
}
console.log(anArray);