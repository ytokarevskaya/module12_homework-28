function someFunction(str, obj, prop) {
	result = prop in obj;
    console.log(result)
    return result
}
const cars = {make: "RENAULT", model: "SANDERO Stepway", year: 2019};

someFunction('str', cars, 'make')


