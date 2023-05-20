function spiral(arr){
    let topRow = 0;
    let bottomRow = arr.length-1;
    let leftCol = 0;
    let rightCol = arr[0].length-1;

    while(topRow <= bottomRow && leftCol <= rightCol){

        for(let i=leftCol; i<=rightCol; i++){
            console.log(arr[topRow][i]);
        }
        topRow++;

       for(let i=topRow; i<=bottomRow; i++){
            console.log(arr[i][rightCol]);
        }
        rightCol--;

        for(let i=rightCol; i>=leftCol; i--){
            console.log(arr[bottomRow][i]);
        }
        bottomRow--;

        for(let i=bottomRow; i>=topRow; i--){
            console.log(arr[i][leftCol]);
        }
        leftCol++
    }
}

const Arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
spiral(Arr);
// time complexity : O(n)
// space complexity : O(1)