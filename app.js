// Quick Question 1
console.log(new Set([1,1,2,2,3,4]))
// Solution:{1, 2, 3, 4}

// Quick Question 2
console.log([...new Set("referee")].join("")) 
// Solution: ref

// Quick Question 3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// Solution: Map(2) {Array(3) => true, Array(3) => false}

// hasDuplicate
function hasDuplicate([...arr]){
    let newSet = new Set(arr)
    if (newSet.size === arr.length){
        return false
    } return true
}

// vowelCount
function vowelCount(str) {
    const vowels = "aeiouAEIOU";
    const vowelMap = new Map();

    for (let char of str) {
        if (vowels.includes(char)) {
            if (vowelMap.has(char.toLowerCase())) {
                vowelMap.set(char.toLowerCase(), vowelMap.get(char.toLowerCase()) + 1);
            } else {
                vowelMap.set(char.toLowerCase(), 1);
            }
        }
    }

    return vowelMap;
}