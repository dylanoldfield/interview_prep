
let  arr = [100, 20, 50, 50, 70, 80, 70, 60, 10, 130];
arr = arr.map(x => x*x);
console.log(arr)
let sorted = quicksort(arr,true);
console.log(sorted)



function quicksort(arr, reverse = false){
   arr = partition(arr, 0, arr.length-1, reverse);
    return arr;
}

function partition(arr, low, high, reverse){
    let pivot = arr[high];
    let position = low;

    if (!reverse){
        for (i = low; i < high; i++){
            if(arr[i] < pivot){
                arr = swap(arr, i, position);
                position++;
            }
        }
    }
    else{
        for (i = low; i < high; i++){
            if(arr[i] > pivot){
                arr = swap(arr, i, position);
                position++;
            }
        }
    }

    arr = swap(arr, position, high);

    if(position - 1 > low){
        partition(arr, low, position - 1,reverse);
    }
    if(position < high){
        partition(arr, position + 1, high,reverse);
    }

    return arr;
    
}

function swap(arr, p1, p2){
    let temp = arr[p1]; 
    arr[p1] = arr[p2];
    arr[p2] = temp;
    return arr;
}