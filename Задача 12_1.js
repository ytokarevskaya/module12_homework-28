const obj = {
      key1: 100,
      key2: 200,
      key3: 300
}
    
function someFunction(obj) {
    if (obj.hasOwnProperty) {
        console.log(obj)
     }
}
someFunction(obj);