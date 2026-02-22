/* LEETCODE 1: TWO SUM */

/* SOLUTION 1: BRUTE FORCE - CHECK ALL PAIRS */
function twoSumBRUTE(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// TIME COMPLEXITY: O(n^2) - WE CHECK ALL PAIRS OF NUMBERS IN THE WORST CASE
// SPACE COMPLEXITY: O(1) - WE USE A CONSTANT AMOUNT OF SPACE FOR THE OUTPUT

/* SOLUTION 2: HASH MAP - STORE COMPLEMENTS */
function twoSumMAP(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        if (map.has(difference) && map.get(difference) !== i) {
            return [i, map.get(difference)!];
        }
        map.set(nums[i], i);
    }
    return [];
};

// TIME COMPLEXITY: O(n) - WE TRAVERSE THE INPUT ARRAY ONCE
// SPACE COMPLEXITY: O(n) - IN THE WORST CASE, ALL ELEMENTS IN THE INPUT ARRAY ARE UNIQUE, AND WE STORE THEM IN THE MAP

