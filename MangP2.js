/**
 * Array methods:
 * forEach()
 * every()
 * some()
 * find()
 * filter()
 * map()
 * reduce()
 */





 
/*
var array1 =[1, 2, 6, 8, 2];
var array2 = [2, 9, 6];

var check = array1.filter(function(value){
    return array2.includes(value);
})
console.log(check);

/*
var array1 =[1, 2, 6, 8];
var array2 = [2, 9, 6];
function findEqualValues(array1, array2){
    return array1.filter(function(value){
        return array2.includes(value);
    })
}
/*


/*
var keyword = 'PHP';
var strings = ['Javascript', 'PHP', 'Học PHP'];
var check4 = strings.filter(function(index){
    return index.indexOf(keyword) != -1;
})
console.log(check4);


 *//*
var monsters = [
    {
        name: 'Cá heo',
        attack: 50,
        speed: 100,
        hitpoint: 100,
    },
    {
        name: 'Khủng long',
        attack: 150,
        speed: 80,
        hitpoint: 180,
    }
]
var check3 = monsters.find(function(monster){
    return monster.attack === 150;
})
console.log(check3);*/




/*var courses = [
    { name: 'Javascript', vnd: 1000000 },
    { name: 'PHP', vnd: 990000 },
    { name: 'HTML, CSS', vnd: 1 }
]
var check2 = courses.some(function(course){
    return course.vnd === 0;
})
console.log(check2);*/

/*var formValues =
[
    { field: 'name', value: 'Sơn Đặng' },
    { field: 'age', value: 18 },
    { field: 'address', value: 'Hà Nội' }
]
formValues.forEach(function(formValue){
    console.log(formValue);

})
var numbers = [-1, 2, 3];
var check = numbers.every(function(number){
    return Number.isInteger(number) && number > 0
})
console.log(check);*/
