/*
This problem is from leetcode: https://leetcode.com/problems/two-sum/
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {};
    for(const num in nums) {
        const value = nums[num]
        const diff = target - value
        if (hash[diff]) return [hash[diff], num]
        hash[value] = num
    }
    return nums
};



const indices = twoSum([15,1,3,7,8], 9);
console.log(indices);