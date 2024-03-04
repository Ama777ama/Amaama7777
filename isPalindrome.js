function isPalindrome(array) {

    const len =array.lenght;

    for(let i = 0; i < len / 2; i++){
        if (arr[i] !== arr[len - i -1]) return false;
    }
    return true;
}

console.log(isPalindrome([1, 2, 3, 3, 2, 1]));