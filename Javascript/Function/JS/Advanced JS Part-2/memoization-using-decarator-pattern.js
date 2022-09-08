const memoize_decorator = (func) => {
    const cache = {};

    return (arg) => {
        if(cache[arg]) {
            console.log('From Cache');
            return cache[arg];
        } else {
            result = func(arg);
            cache[arg] = result; 
        }
        return result;
    }
}
const mul_10 = (num) => {
    return num * 10;
}
const mul_10_memoized = memoize_decorator(mul_10);

console.log(mul_10_memoized(3)); //30
console.log(mul_10_memoized(3)); //From Cache  30
console.log(mul_10_memoized(6)); //60
console.log(mul_10_memoized(3)); //From Cache  30






const cube = (num) => {
    return num ** 3;
}
const cube_memoize = memoize_decorator(cube);

console.log(cube_memoize(10)); //1000
console.log(cube_memoize(40)); //64000
console.log(cube_memoize(50)); //125000
console.log(cube_memoize(10)); //From Cache  1000