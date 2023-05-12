const array = [8, -5, 7, 9, -10, 1, -20, 8, -3];
let maxSum = 0;
function maxSubArray(arr){
    let sum = 0;
    for(let i=0; i < arr.length; i++){
        if(arr[i] + sum > 0){
            sum += arr[i];
            maxSum = maxSum > sum ? maxSum : sum;
        } else {
            sum = 0;
        }
    }
    console.log(maxSum);
}

maxSubArray(array);