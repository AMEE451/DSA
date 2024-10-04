function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid]>=nums[right]){
            return mid
        }
        if (nums[mid] <nums[right]) {
            left=mid+1
        }
        else{
            right=mid-1
        }
    }
    return left;
}

let nums = [1, 3, 15, 12, 15];
console.log(findPeakElement(nums)); 
