//Exercise 3.4 (createStack)

function createStack() {
  let items = [];

  function push(newItem) {
    items.push(newItem);
  }

  function pop() {
    return items.pop();
  }

  function print() {
    return items;
  }

  return { push, pop, print };
}

const stack = createStack();

stack.push(1);

stack.push(2);

stack.push(3);

stack.push(4);

stack.pop();

stack.pop();

stack.push(6);

console.log(stack.print());

//Ans:- [ 1, 2, 6 ] . Here, all 3 functions refer to the same lexical scope. The same list is being utilized and referred to by the functions.
