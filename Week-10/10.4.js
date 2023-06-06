//Program to check if source and destination nodes can be reached in a graph
let vertices;
let AdjMatrix=[];
function graph(v){
    for(let i=0;i<v;i++){
        AdjMatrix[i]=[];
    }
}
function isPathPresent(source,destination){
    let Queue = [];
    let visited = [];
    var tempList = AdjMatrix[source];
    visited.push(tempList[0]);
    Queue.push(tempList[0]);
    while (Queue.length!=0){
        var temp = Queue.shift();
        if(temp==destination){
            return true;
        }
        else{
            var newTempList = AdjMatrix[temp];
            for(let j=0;j<newTempList.length;j++){
                var z = newTempList[j];
                if(visited.indexOf(z)==-1){
                    visited.push(newTempList[j]);
                    Queue.push(newTempList[j]);
                }
            }
        }
    }
    return false;
}
graph(6);
var edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];
var src = 0, dst = 5;
for(let i=0; i<edges.length; i++){
    AdjMatrix[edges[i][0]].push(edges[i][1]);
}
console.log(isPathPresent(src,dst));
//Time complexity: O(n^2)
//Space complexity: O(n^2)
