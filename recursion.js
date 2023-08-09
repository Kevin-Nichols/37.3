/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  } else {
    return nums[0] * product(nums.slice(1));
  }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0;
  } else {
    const currWordLen = words[0].length;
    const restOfWordsLen = longest(words.slice(1));

    return Math.max(currWordLen, restOfWordsLen)
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0) {
  if (idx >= str.length) {
    return ""
  } else {
    return str[idx] + everyOther(str, idx + 2);
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  } else {
    if (str[0] === str[str.length - 1]) {
      return isPalindrome(str.slice(1, -1));
    } else {
      return false;
    }
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx >= arr.length) {
    return -1;
  } else if (arr[idx] === val) {
    return idx;
  } else {
    return findIndex(arr, val, idx + 1);
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str === "") {
    return "";
  } else {
    const lastChar = str[str.length - 1];
    const restOfChars = str.slice(0, -1);
    return lastChar + revString(restOfChars);
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let res = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      res.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      res = res.concat(gatherStrings(obj[key]));
    }
  }
    return res;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  const middleIdx = Math.floor((start + end) / 2);
  const middleVal = arr[middleIdx];

  if (middleVal === val) {
    return middleIdx;
  } else if (middleVal < val) {
    return binarySearch(arr, val, middleIdx + 1, end);
  } else {
    return binarySearch(arr, val, start, middleIdx - 1);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
