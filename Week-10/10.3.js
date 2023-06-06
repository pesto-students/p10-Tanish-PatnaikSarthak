//Program to print level order traversal in binary tree
function printLevelOrder(root,index) {
    if (root[index] === undefined || root[index]===null)
        return [];
    var Queue = [];
    var fList =[];
    var tempIndex = 0;
    Queue.push(root[index]);
    while (Queue.length!=0){
        var currNode = Queue.shift();
        fList.push(currNode);
        tempIndex = root.indexOf(currNode,tempIndex);
        if(root[2*tempIndex+1] != undefined || root[2*tempIndex+1] !=null){
            Queue.push(root[2*tempIndex+1]);
        }
        if(root[2*tempIndex+2] != undefined || root[2*tempIndex+2] !=null){
            Queue.push(root[2*tempIndex+2]);
        }
    }
    return fList;
}

const arr1 = [3,9,20,null,null,15,7];
console.log(printLevelOrder(arr1,0));
//Time complexity: O(n)
//Space complexity: O(n)
