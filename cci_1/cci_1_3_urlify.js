let str = "Mr John Smith"
let sep = "%20"

console.log(urlify2(str, sep));


// using js magic to cheat
function urlify(str, sep){
    let url = str.split(' ').join(sep)
    console.log(url)
    return url
}

//reverse the down the string and swap spaces. 
function urlify2(str, sep, str_len = str.length){
    // This is prep code to mimic how to do it in a more structured lanuage 
    let sep_len = sep.length;
    let spaces = str_len - str.split(' ').join('').length;
    str = str + ("0".repeat(spaces * (sep_len - 1)));
    str_arr = str.split(''); // must be done because strings are immutable in js 

    //now the solution 
    // mark last spot in array 
    let j = str.length - 1;

    // iterates backward from the non-padded string 
    for(let i = str_len - 1; i >= 0; i--){
    
        if(str_arr[i] == ' ')
        {
            // insert separator, last character first 
            for(let k= 0; k <  sep_len; k++){
                str_arr[j] = sep[sep_len - 1 - k];
                j--;
                //console.log(str_arr)
            }
        }
        // else just copy the character 
        else{
            str_arr[j] = str_arr[i];
            j--;
        }
    }

    return str_arr.join('')// turn this back into a string;
}
