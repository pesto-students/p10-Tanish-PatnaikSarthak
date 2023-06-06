function allPathsFromSourceToTarget(graph){
    const paths=[];
    function depthSearch(index,currPath){
        if(currPath[currPath.length-1]==graph.length-1){//if last element on current path is equal to last element on graph
            paths.push(currPath);
            return;
        }
        for(let i=0; i<graph[index].length; i++){
            let tempArr = currPath.slice();
            tempArr.push(graph[index][i]);
            depthSearch(graph[index][i],tempArr);
        }
    }
    depthSearch(0,[0]);
    return paths;
}
var graph = [[1,2],[3],[3],[]];
console.log(allPathsFromSourceToTarget(graph));
//Time complexity: O(V+E)
//Space complexity: O(V+E)