// LEETCODE 217: CONTAINS DUPLICATES

/* SOLUTION 1: SORT AND SEARCH SEQUENTIAL */

function containsDuplicateSORT(nums: number[]): boolean {
    const sorted = nums.sort();
    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i] === sorted[i + 1]) {
            return true;
        }
    }
    return false;
}

// TIME COMPLEXITY: O(n log n) - DUE TO THE SORTING STEP
// SPACE COMPLEXITY: O(1) - SORTING IN PLACE, NO ADDITIONAL DATA STRUCTURES USED


/* SOLUTION 2: CREATE SET AND CHECK IF ELEMENTS ARE IN SET */

function containsDuplicateSET(nums: number[]): boolean {
    const contains = new Set<number>();
    for (const num of nums) {
        if (contains.has(num))
            return true;
        contains.add(num);
    }
    return false;
};

// TIME COMPLEXITY: O(n) - WE TRAVERSE THE INPUT ARRAY ONCE
// SPACE COMPLEXITY: O(n) - IN THE WORST CASE, ALL ELEMENTS IN THE INPUT ARRAY ARE UNIQUE, AND WE STORE THEM IN THE SET


/* SOLUTION 3: CHECK LENGTH OF SET IS SAME AS LENGTH OF INPUT ARRAY */

function containsDuplicateLENGTH(nums: number[]): boolean {
    const unique = new Set(nums);
    return unique.size !== nums.length;
}

// TIME COMPLEXITY: O(n) - WE TRAVERSE THE INPUT ARRAY ONCE TO CREATE THE SET
// SPACE COMPLEXITY: O(n) - IN THE WORST CASE, ALL ELEMENTS IN THE INPUT ARRAY ARE UNIQUE, AND WE STORE THEM IN THE SET
