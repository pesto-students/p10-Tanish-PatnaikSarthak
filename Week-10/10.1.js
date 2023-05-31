//Program to find max depth in a binary tree
var maxDepth = function(root,index) {
    if(root[index] === undefined || root[index]===null){
         return 0;
    }
    return Math.max(maxDepth(root,2*index+1),maxDepth(root,2*index+2)) + 1;
};
     
const arr1 = [3,9,20,null,null,15,7];
console.log(maxDepth(arr1,0)); 