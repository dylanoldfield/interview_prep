str = "Tactxx Coabb";

console.log(paliPermute2(str));


function paliPermute(str_){
    // this core principle of a palindrome is at most 1 character can have an odd number of the character
     let str_lower = str_.toLowerCase().split(' ').join('');
     console.log(str_)

    let numOfOdds = 0;
    let letters = {};

    for(let i in str_lower){
        let char = str_lower[i];

        if(letters[char] == undefined){
            letters[char] = 1;
            numOfOdds++;
        }
        else
        {
            letters[char] += 1;
            
            if(letters[char] % 2 == 0){
                numOfOdds--;
            }
            else{
                numOfOdds++; 
            }
        }
    }

    return numOfOdds <= 1;

}

/*
    Uses a bit map but is only restricts it to lower case characters, ASCII encoded 
*/
function paliPermute2(str){
    let bitVector = 0; 

    for(let i in str){
        let char = str[i].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
        if (char < 0) continue; // not a character
        //console.log(char)
        map = 1 << char; 
        // if that position is not toggled 
        if((bitVector & map) == 0){
            // toggle it on
            bitVector |= map;
            
        }
        else{
            // toggle it off 
            bitVector &= ~map;
        }
        //console.log((bitVector >>> 0).toString(2));
    }
    console.log((bitVector >>>0 ).toString(2));
    return (bitVector == 0 || ((bitVector - 1) & bitVector) == 0); // if you only have 1 bit switched then subtracing 1 from it will be the inverse

}