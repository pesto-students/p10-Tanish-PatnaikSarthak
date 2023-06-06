//Exercise 3.3
function createIncrement() {
  letcount = 0;
  function increment() {
    count++;
  }
  letmessage = `Count is${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?
//Here, the answer is: 0 . As 0 was logged in the lexical scope for log function when closure was returned.
