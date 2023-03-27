function transformToObjects(numberArray) {
    // Todo: Add your logic
    return number.map(function(number){
        return {val: number}
    })
    
}
var number = [1, 2, 3]
var objects = transformToObjects(numbers)
    console.log(objects)
