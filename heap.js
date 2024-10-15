/**
 * 767. Reorganize String
 * @param {string} s
 * @return {string}
 */

var reorganizeString = function(s) {
    const freqMap = {};
    for (const c of s) {
        freqMap[c] = (freqMap[c] || 0) + 1;
    }

    console.log("freqMap : ", freqMap);
    const maxHeap = [...Object.keys(freqMap)].sort((a, b) => freqMap[b] - freqMap[a]);
    console.log("maxHeap : ", maxHeap);

    let res = "";
    while (maxHeap.length >= 2) {
        const char1 = maxHeap.shift();
        const char2 = maxHeap.shift();
        console.log("maxHeap while 1: ", maxHeap);

        res += char1;
        res += char2;

        if (--freqMap[char1] > 0) maxHeap.push(char1);
        if (--freqMap[char2] > 0) maxHeap.push(char2);
        console.log("maxHeap while 2: ", maxHeap);

        maxHeap.sort((a, b) => freqMap[b] - freqMap[a]);
    }

    if (maxHeap.length) {
        const char = maxHeap[0];
        if (freqMap[char] > 1) return "";
        res += char;
    }

    return res;
};


/**
 * Amazon online assessment question
 * @param {string[]} coupons
 * @return {boolean[]}
 */

function findValidCoupons(coupons) {
    // Array to store the result for each coupon
    const result = [];

    // Iterate through each coupon code
    for (let coupon of coupons) {
        // Object to store character counts
        const charCount = {};

        // Count occurrences of each character in the coupon
        for (let char of coupon) {
            charCount[char] = (charCount[char] || 0) + 1;
        }

        // Check if all characters have even counts
        const isValid = Object.values(charCount).every(count => count % 2 === 0);

        // Push the result (true for valid, false for invalid)
        result.push(isValid);
    }

    return result;
}

// Example usage:
const coupons = ["ABBA", "ABCD", "AABBCC", "AABBC"];
console.log(findValidCoupons(coupons)); // Output: [true, false, true, false]



/**
 * Amazon online assessment question
 * @param {string[]} logs
 * @return {string[]}
 */
function reorderLogFiles(logs) {
    // Comparator function to sort the logs
    const comparator = (log1, log2) => {
        // Split each log into identifier and content
        const [id1, rest1] = log1.split(" ", 2);
        const [id2, rest2] = log2.split(" ", 2);

        // Check if they are letter-logs or digit-logs
        const isDigit1 = isDigitLog(rest1);
        const isDigit2 = isDigitLog(rest2);

        // If both are letter-logs, sort lexicographically by content, then by identifier if needed
        if (!isDigit1 && !isDigit2) {
            // Compare the content
            const cmp = rest1.localeCompare(rest2);
            if (cmp !== 0) {
                return cmp;
            }
            // If contents are the same, compare the identifiers
            return id1.localeCompare(id2);
        }

        // If one is a digit-log and the other is a letter-log, the letter-log should come first
        if (!isDigit1 && isDigit2) {
            return -1;
        } else if (isDigit1 && !isDigit2) {
            return 1;
        }

        // If both are digit-logs, maintain their relative order (no sorting)
        return 0;
    };

    // Helper function to determine if a log is a digit-log
    const isDigitLog = (log) => {
        // A log is a digit-log if it starts with a digit (after the identifier)
        return /\d/.test(log[0]);
    };

    // Sort the logs using the custom comparator
    return logs.sort(comparator);
}

// Example usage:
const logs = ["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"];
console.log(reorderLogFiles(logs));
// Output: ["let1 art can", "let3 art zero", "let2 own kit dig", "dig1 8 1 5 1", "dig2 3 6"]
