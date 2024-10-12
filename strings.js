

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const counter = {};

    for (let char of s) {
        counter[char] = (counter[char] || 0) + 1;
    }

    for (let char of t) {
        if (!counter[char] || counter[char] === 0) {
            return false;
        }
        counter[char] = counter[char] - 1;
    }

    return true;    
};

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {

    if (s.length === 1)
        return 1;

    let sArray = s.split("").sort().join("");
    let count = 0;
    for (let i = 0; i < sArray.length; i++) {
        if (sArray[i] === sArray[i + 1]) {
            count += 2;
            i++;
        }
    }
    if (count < s.length) {
        return count + 1;
    }

    return count;
};

//another solution
var longestPalindrome2 = function(s) {
    let obj ={};
    let answer=0;
    for(let c of s){
        if(!obj[c]){
                obj[c]=1;
        }
        else
             obj[c]++;
    if(obj[c]%2===0){
        answer += 2;
    }
    }
  return s.length>answer ? answer+1 :answer;  
};