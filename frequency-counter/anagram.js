// Anagrams are strings that can be generated by rearranging the characters.
// E.g. cinema--->iceman, abcda --> aabcd

const anagram = (string1, string2) => {
    if (string1.length !== string2.length) return false
    const frequenyCounter1 = {}
    const frequenyCounter2 = {}
    for(const c of string1) {
        frequenyCounter1[c] = (frequenyCounter1[c] || 0) + 1
    }
    for(const c of string2) {
        frequenyCounter2[c] = (frequenyCounter2[c] || 0) + 1
    }
    for (key in frequenyCounter1) {
        if (frequenyCounter1[key] !== frequenyCounter2[key])
            return false
    }
    return true
}


const string1 = 'baaaa'
const string2 = 'aabaa'
const result = anagram(string1, string2)
console.log(result)