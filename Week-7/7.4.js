 const Arr =  [7,1,5,3,6,8];
function profit(Arr){
    let min = Arr[0];
    let max = 0;
    for(let i=0; i<Arr.length; i++){
        min = min > Arr[i] ? Arr[i] : min;
        let profit = Arr[i]-min;
        max = max < profit ? profit : max; 
    }
    return max;
}

console.log(profit(Arr));