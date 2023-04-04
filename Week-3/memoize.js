//Exercise 3.1

function add(...args) {
  return args.reduce((sum, currentValue) => sum + currentValue, 0);
}

const memoizeAdd = memoize(add);

memoizeAdd(100, 100);

memoizeAdd(100);

memoizeAdd(100, 200);

memoizeAdd(100, 100);

function memoize(add) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }
    const result = add(args);
    cache[key] = result;
    return result;
  };
}
