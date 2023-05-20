const arr = [1, 0, 2, 1, 2, 0, 2, 1];

function sortArr(arr){
    let left = 0;
    let mid = 0;
    let right = arr.length-1;
    while(mid<=right){
        switch (arr[mid]){
            case 0:
               arr = [arr[mid], arr[left]] = [arr[left], arr[mid]];
               left++;
               mid++;
               break;
            case 1: 
                mid++;
                break;
            case 2:
                arr = [arr[mid], arr[right]] = [arr[right], arr[mid]];
                right--;
                break;
        }
    }
    return arr;
}
console.log(sortArr(arr));
// time complexity : O(n)
// space complexity : O(1)