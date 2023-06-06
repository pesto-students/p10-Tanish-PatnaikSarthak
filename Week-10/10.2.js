//Program to validate elements in binary tree
var maxDepth = function(root,index) {
    if(root[index] === undefined || root[index]===null){
         return false;
    }
    if(root[2*index+1]!=undefined && root[2*index+1]!=null){
        if(root[index]<root[2*index+1]){
            return false;
        }
    }
    if(root[2*index+2]!=undefined && root[2*index+2]!=null){
        if(root[2*index+2]<root[index]){
            return false;
        }
    }
    if(root[2*index+2]==undefined && root[2*index+2]==null && root[2*index+1]==undefined && root[2*index+1]==null){
        return true;
    }
    if(root[2*index+2]==undefined && root[2*index+2]==null){
        return maxDepth(root,2*index+1);
    }
    if(root[2*index+1]==undefined && root[2*index+1]==null){
        return maxDepth(root,2*index+2);
    }
    return (maxDepth(root,2*index+1) && maxDepth(root,2*index+2));
};
     
const arr1 = [2,1,3];
console.log(maxDepth(arr1,0));
//Time complexity: O(n)
//Space complexity: O(n)
