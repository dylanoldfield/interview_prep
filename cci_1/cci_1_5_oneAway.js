let str_1 = "pale"
let str_2 = "pae"

console.log(oneAway(str_1,str_2)); 



function oneAway(str_1, str_2){
    //check they are within 1 character length of each other 
    if(str_1.length > str_2.length + 1 || str_1.length < str_2.length -1) return false; 

    // set longest to str_1
    if(str_1.length < str_2.length){
            let temp = str_1; 
            str_1 = str_2;
            str_2 = temp;
    }

    let difs = 0; 
    let j = 0;

    for(let i in str_1){
        if(str_1[i] != str_2[j]){
            difs++
        }else{
            j++;
        }   
    }
   
    return difs + (str_2.length - j) <= 1 ;
}


// function to check is one away from a permuatation 
function oneAwayPermute(str_1, str_2){
    
    //check they are within 1 character length of each other 
    if(str_1.length > str_2.length + 1 || str_1.length < str_2.length -1) return false; 

    let map = {}

    // set longest to str_1
    if(str_1.length < str_2.length){
        let temp = str_1; 
        str_2 = str_1;
        str_1 = temp;
    }
    
    //populate the str_1 map
    for(let i in str_1){
        let char = str_1[i];
        // iterate letter 
        if(map[char] == undefined){
            map[char] = 1;
        }
        else{
            map[char] += 1;
        }
    }

    let mismatch = 2; // optimisation to stop after 2 mismatches 

    for(let j in str_2){
        let char = str_2[j];

            // iterate letter 
            if(map[char] == undefined){
                mismatch--;
                if(mismatch == 0) return false;
            }
            else{
                map[char] -= 1;
                if(map[char] < -1) return false;
            }
    }

    let sum = 0; 
    for(let char in map){
        console.log(char);
        sum += map[char];
    }

    return ((sum >= -1) && (sum <= 1));
}