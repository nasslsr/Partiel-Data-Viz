function twoSum(array, target) {
 
    for (var PremierIndice = 0; PremierIndice < array.length; PremierIndice++) {
        for (var SecondIndice = PremierIndice + 1; SecondIndice < array.length; SecondIndice++) {
            if (array[PremierIndice] + array[SecondIndice] === target) {
                return [PremierIndice, SecondIndice];
            }
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9)); 
console.log(twoSum([3, 2, 4], 6)); 
console.log(twoSum([3, 3], 6)); 