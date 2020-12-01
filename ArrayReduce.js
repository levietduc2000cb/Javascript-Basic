
/*var courses = [
    { name: 'Javascript', coin: 1000 },
    { name: 'PHP', coin: 1200 },
    { name: 'Dart', coin: 1400 }
]
var total = courses.reduce(function(a,b){
    return a + b.coin;
},0)
console.log(total);*/




var inputs = [{}, 1, [], NaN];
var total = inputs.reduce(function(a,b){
   if(typeof b === 'number' && !Number.isNaN(b))
   {
       return a+b;
   }
   else
   {
       return a;
   }
},0)
console.log(total);
/*
console.log(total);
function sumNumbers(inputs) {
    return inputs.reduce(function(a, b) {
        if(Number.isInteger(b)) {
            return a + b;
        }
        else {
            return a;
        }
    }, 0);
}*/






/*var numbers = [1, 2, 0, 6];
var total = numbers.reduce(function(a=0,b){
    return a+b;
})
console.log(total);*/