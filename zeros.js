var duplicateZeros = function(arr) {
    let numZeros = 0;
    let length_ =  arr.length - 1; 

    for (i = 0; i < arr.length - numZeros; i++){
        if (arr[i] == 0){
            numZeros++;

            if(i == arr.length - numZeros){
                arr[length_] = 0;
                length_--;
                numZeros--;
                break;
            }

        }
    }

    //console.log(numZeros);

    if (numZeros == 0) return;

    for(i = length_ - numZeros; i >= 0; i--)
    {
        if(arr[i] == 0){
            arr[i + numZeros] = 0;
            //console.log(numZeros);
            numZeros--;
            //console.log(numZeros);
            
            if(numZeros == 0){
                break;
            } 
        }
        arr[i+numZeros] = arr[i];
        //console.log(numZeros);
        //console.log(arr);
    }

    return arr;

};

let arr = [8,4,5,0,0,0,0,7];
let dup = duplicateZeros(arr);
console.log(dup);