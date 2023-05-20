const Arr = [5, 10, 3, 2, 50, 80];
function checkPair(Arr, num){
    let map = new Map();
    for(let i=0; i<Arr.length; i++){
        if(map.has(Arr[i]-num)){
            return 1;
        } else {
            map.set(Arr[i], true);
        }
    }
    return 0;
}
console.log(checkPair(Arr, 78));
// time complexity : O(n)
// space complexity : O(1)