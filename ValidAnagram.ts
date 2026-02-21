// LeetCode 242: VALID ANAGRAM

// SOLUTION 1: SORT AND COMPARE
// TIME: O(n log n) DUE TO SORTING
// SPACE: O(1) IF WE IGNORE THE SPACE USED BY THE SORTING ALGORITHM, OTHERWISE O(n)
function isAnagramSORT(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');
    
    return sortedS === sortedT;
}

// SOLUTIION 2: MAP CHARACTER COUNTS
// TIME: O(n) WHERE n IS THE LENGTH OF THE STRINGS
// SPACE: O(1) BECAUSE THE NUMBER OF POSSIBLE CHARACTERS IS LIMITED (E.G., 26 LOWERCASE LETTERS)
// O(n) IN THE WORST CASE IF WE CONSIDER ALL UNIQUE CHARACTERS
function isAnagramMAP(s: string, t: string): boolean {
    if (s.length != t.length) return false;

    const map = new Map();

    for (const char of s) {
        if (map.has(char))
        {
            map.set(char, map.get(char)+1);
        } else {
            map.set(char, 1);
        }
    }

    for (const char of t) {
        if (!map.has(char))
        {
            return false;
        } else {
            map.set(char, map.get(char) - 1);
        }
    }

    for (const val of map.values()) {
        if (val != 0) return false;
    }

    return true;
};

/* SOLUTION 3: CHARACTER COUNT ARRAY */
// TIME: O(n) WHERE n IS THE LENGTH OF THE STRINGS
// SPACE: O(1) BECAUSE THE NUMBER OF POSSIBLE CHARACTERS IS LIMITED (E.G., 26 LOWERCASE LETTERS)
function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) return false;

    const counts = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
        counts[t.charCodeAt(i) - 'a'.charCodeAt(0)] -= 1;
    }

    return counts.every((val) => val === 0);
};