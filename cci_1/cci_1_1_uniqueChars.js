str = "abcz"

console.log(isUnique3(str))


function isUnique(str){
    letters = {}

    for(let i in str){
        console.log(chr)
    
        if(letters[str[i]] != undefined){
            return false;
        }

        letters[str[i]] = true;
    }

    return true;
}

function isUnique2(str){
    let sorted = str.split('').sort().join('');
    console.log(sorted);

    for(let i = 0; i < sorted.length - 1; i++){
        if(str[i] === str[i + 1]){
            return false;
        }
    }
    
    return true;

}

function isUnique3(str){

    //solution only works for lower case letters because checker is a 32 bit number
    let checker = 0; 
    for(let i = 0; i < str.length; i++){
        //console.log(str[i])
        let val = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
        //console.log((1 << val).toString(2));
        //console.log(((checker & (1 << val)) >>> 0).toString(2));
        
        //check bit 'and' is anything but 0 
        if(checker & (1 << val)){
            return false;
        }
    //console.log(1<<val);
        
        //bit addition 
        checker |= (1<<val);
    //console.log(checker)
    }
    
    return true;

}