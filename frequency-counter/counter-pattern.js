// Given 2 arrays. Check if array2 contains the squares of all numbers in array1.
// Order does not matter
// E.g. [1,2,3] --> [4,9,1], [1,2,2,3] --> [4,1,4,9]

const same = (array1, array2) => {
    if (array1.length !== array2.length) return false
    const frequencyCounter1 = {}
    const frequencyCounter2 = {}
    for(const value of array1) {
       frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1
    }
    for(const value of array2) {
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1
     }
     for (key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) return false;
        if ((frequencyCounter1[key]) !== frequencyCounter2[key**2]) return false;
     }
     return true
}


const result = same([1,2,3,3], [1,4,9,9])
console.log(result)