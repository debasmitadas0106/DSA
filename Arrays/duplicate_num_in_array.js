// There is a given array where we have to return True if a duplicate number exists in an array, and return False if a number exists more than once in the array.//
// Sorting method:

function containsDuplicate(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return true; // If adjacent elements are equal, duplicate found
        }
    }
    return false; // No duplicates found
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 1];

console.log(containsDuplicate(arr1)); // Output: false
console.log(containsDuplicate(arr2)); // Output: true