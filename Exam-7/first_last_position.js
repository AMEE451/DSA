
function findFirstAndLast(nums, target) {
    let left = 0, right = nums.length - 1;
    let result = [-1, -1];

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
       
        if (nums[mid] == target) {
            while (nums[mid - 1] == target) {
                mid--;
            }
            result[0] = mid;
    
            while (nums[mid + 1] == target) {
                mid++;
            }
            result[1] = mid;
            break;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}
let nums = [5, 7, 8, 8, 8, 8, 8, 10];
let target = 8;
console.log(findFirstAndLast(nums, target));  
