var removeElement = function(nums, val) {
    let count = 0;
    
    for(i = 0; i < nums.length; i++){
        
        if(nums[i] == val){
            count++;
        }else{
            nums[i - count] = nums[i];
        }
    console.log(nums)
    }
    console.log(nums);
    console.log(count)
    
    while(count > 0){
        nums.pop()
        count--;
    }

    console.log(nums); 
    return nums.length - count - 1;
};

var removeElement2 = function(nums,val){
    return nums.filter( x => x != val);
}

var removeElement3 = function(nums,val){
    
    for(i = 0; i < nums.length; i++){
        if(nums[i] == val){
            nums.splice(i,1);
            i--;
        }
    }
    return nums;
}

var removeElement4 = function(nums, val) {
    let count = 0;
    
    for(i = 0; i < nums.length; i++){
        if(nums[i] == val){
            count++;
        }else{
            nums[i - count] = nums[i];
        }
    }
    nums.splice(nums.length - count, count);
    return nums.length;
};

var removeDuplicates = function(nums){
    let dict = {};
    let count = 0;
    
    for(i = 0; i < nums.length; i++){
        
        if(dict[nums[i]]){
            count++;
        }else{
            nums[i - count] = nums[i];
            dict[nums[i]] = true;
        }
    }
    
    while(count > 0){
        nums.pop()
        count--;
    }
    return nums;
};

let nums = [3,2,2,3];
console.log(removeDuplicates(nums));
