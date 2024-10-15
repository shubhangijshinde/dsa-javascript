/**
 * Array Common patterns
 *
 * 1a. Two Sum (Two Pointers)
 * 2a. Max Sum Subarray Size K (Sliding Window)
 * 2b. Longest Substring Without Repeating Characters
 * 3a. Max Contiguous Subarray Sum (Kadane's Algo)
 * 4a. Binary search
 * 5a. Subarray Sum Equals K (Prefix sums)
 * 5b. Range Sum Query - Immutable (Prefix sums)
 * 6a. Combindation Sums (Backtracking)
 * 6b. Permutations (Backtracking)
 * 7a. House Robber (Dynamic Programming on Arrays)
 * 8a. Next Greater Element (Monotonic Stack)
 * 9a. Dutch national flag algo
 * 10a. Merge Intervals (Sorting and Greedy)
 * 10b. Find Interval Overlaps (Greedy)
 * 10c. Meeting Rooms (Greedy)
 */

/**
 * Best Time to Buy and Sell Stock
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let profit = 0;

    for(let i = 0; i < prices.length; i++) {
        buyPrice = Math.min(buyPrice, prices[i]);
        profit = Math.max(profit, prices[i]-buyPrice);
    }

    return profit;
};

/**
 * Binary Search
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;

    while(left <= right) {
        let mid = Math.floor((right + left)/2);
        if(nums[mid] === target) return mid;
        if(target < nums[mid]) {
            right = mid-1;
        }
        else {
            left = mid+1;
        }
    }

    return -1;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let forwardArray = [];
    let resArray = [];
    let start = 1;
    let end = 1;
    resArray[nums.length-1] = 1;

    for(let i=0; i < nums.length; i++) {
        forwardArray.push(start);
        start *= nums[i];
        end *= nums[nums.length-(i+1)]

        if(nums.length-(i+2) >= 0) {
            resArray[nums.length-(i+2)] = end;
        }
    }

    for(let i=0; i<resArray.length; i++) {
        resArray[i] = resArray[i] * forwardArray[i];
    }

    return resArray;
};