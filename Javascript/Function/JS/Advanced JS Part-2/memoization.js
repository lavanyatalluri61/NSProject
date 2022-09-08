/**
 *  Memoziation is a tsctic to cache outputs for pure functions
 * 
 * it means this memorize itself result first.
 * 
 */
const mul_10 = (num) => {
    return num * 10;
}
console.log(mul_10(3)); //30
console.log(mul_10(3)); //30
console.log(mul_10(5)); //50

//Here the problem is we are doing 3 * 10 twice instead we can cache the result 
//to improve performance

// So this caching of results is called memoization

let cache = {};
const mul_10_memoized = (num) => {
    let result;
    if(cache[num]) {
        console.log("from cache");
        return cache[num];
    }
    else {
        result = num * 10;
        cache[num] = result;
    }
    return result;
}
console.log(mul_10_memoized(3)); //30
console.log(mul_10_memoized(3)); //30
console.log(mul_10_memoized(5)); //50
console.log(cache);    //{ '3': 30, '5': 50 }






















