const curry = (fn) => {
  function acc(...args){
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...newArgs){
        return acc.apply(this, [...args, ...newArgs]);
      }
    }
  }
  return acc;
}

function sum(a,b,c){
  return a+b+c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1,2,3));
console.log(curriedSum(10,20)(30));
console.log(curriedSum(100)(200)(300));
