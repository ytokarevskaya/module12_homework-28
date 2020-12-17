function someFunction(obj, prop) {
	result = prop in obj;
    console.log(result)
    return result
}
const cars = {make: "RENAULT", model: "SANDERO Stepway", year: 2019};

someFunction(cars, 'make')


// Всё правильно, но не совсем понятно, зачем нужен параметр str в функции :) он никак не используется, поэтому нужно его убрать, чтобы не засорять код