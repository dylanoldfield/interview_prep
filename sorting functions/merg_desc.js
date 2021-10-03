/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let length_ = m + n - 1; 
    m--; 
    n--; 
    while(length_ >= 0){
        if(m < 0){
            nums1[length_] = nums1[n]
            n--;
        }
        else if (n < 0){
            break;
        }
        else{
            if(nums1[m] > nums2[n]){
                nums1[length_] = nums1[m];
                m--;
            }
            else{
                nums1[length_] = nums2[n];
                n--;
            }
        }
        length_--; 
    }


    return nums1;
};

let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];

console.log(merge(nums1, 3, nums2, nums2.length))

