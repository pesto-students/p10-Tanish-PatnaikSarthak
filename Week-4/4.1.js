class MyPromise {
    resolvedData = null;
    rejectedData = null;
  
    onFulfilled = null;
    onReject = null;
  
    isFulfilled = false;
    isRejected = false;
  
    constructor(executor) {
      const resolve = (value) => {
        this.resolvedData = value;
        this.isFulfilled = true;
        if (this.onFulfilled) {
          this.onFulfilled(this.resolvedData);
        }
      };
  
      const reject = (value) => {
        this.rejectedData = value;
        this.isRejected = true;
        if (this.onReject) {
          this.onReject(this.rejectedData);
        }
      };
  
      executor(resolve, reject);
    }
  
    then(fn) {
      this.onFulfilled = fn;
      if (this.isFulfilled) {
        this.onFulfilled(this.resolvedData);
      }
      return this;
    }
  
    catch(fn) {
      this.onReject = fn;
      if (this.isRejected) {
        this.onReject(this.rejectedData);
      }
      return this;
    }
  }
  
  function getNumber() {
    return Math.round(Math.random() * 1000);
  }
  
  const result = new MyPromise((resolve, reject) => {
    const number = getNumber();
  
    if (number % 5 === 0) {
      reject(number+" is rejected");
    } else {
      resolve(number+" is resolved");
    }
  })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));