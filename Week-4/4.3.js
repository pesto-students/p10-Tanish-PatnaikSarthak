let fibonacci = {
    [Symbol.iterator]: function () {
        let i=0,j=1,k=0,iterator=1;
        return {
            next: () => {
                if(iterator++ <= 7) {
                    k=i;
                    i=j;
                    j=i+k;
                    return {value: k, done: false };
                } else {
                    return {value: undefined, done: true };
                }
            }
        }
    }
}
for (let i of fibonacci) {
    console.log(i);
}