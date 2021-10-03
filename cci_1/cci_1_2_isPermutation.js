let str1 = "aabbcc"
let str2 = "ccbbac"


console.log(isPermutation2(str1, str2))

function isPermutation(str1, str2){
    if(str1.length != str2.length) return false;
    if(str1 === str2) return true;

    let sorted_1 = str1.split('').sort().join('')
    let sorted_2 = str2.split('').sort().join('')
    if(sorted_1 === sorted_2) return true; 
    return false;
}

// solution only works for lower case
function isPermutation2(str1,str2){
    if(str1.length != str2.length) return false;
    if(str1 === str2) return true;
    dict = {}

    for(let i in str1){
       if(dict[str1[i]] == undefined){
            dict[str1[i]] = 1;
       } else{
        dict[str1[i]] += 1;
       }
        console.log(dict[str1[i]])
    }

    for(let j in str2){

        if(dict[str2[j] == undefined]) return false;
        dict[str2[j]] -= 1;
        console.log(dict[str2[j]])
        if(dict[str2[j]] < 0) return false;
    }

    return true;
}