var numbers = document.querySelectorAll('.btn');
console.log(numbers);

for (var i=0; i<numbers.length; i++) {
    var number = numbers[i];
    number.addEventListener('click', function (e){
        console.log('кликк по кнопке')
    })
};

console.log('скрипт подключен');

