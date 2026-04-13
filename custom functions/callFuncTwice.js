const add = (a, b) => a + b;

// Higher order function with multiple args
callFuncTwice = (func, ...args) => {
  const first = func(...args)
  return func(first, ...args.slice(1))
}

const result = callFuncTwice(add, 3, 4)  // -> add( add(3,4), 4 ) -> add(7,4) -> 11

console.log(result)