//Program to find the town judge
let vertices;
let AdjMatrix=[];
function graph(v){
    for(let i=0;i<v;i++){
        AdjMatrix[i]=[];
    }
}
function townJudge(){
    var judgeFound=-1;
    for(let i=0;i<AdjMatrix.length;i++){
        if(AdjMatrix[i].length==0){
            var temp = i;
            var indicator =true;
            for(let j=0; j<AdjMatrix.length;j++){
                if(AdjMatrix[j].indexOf(temp)==-1 && temp!=j){
                    indicator=false;
                    break;
                }
            }
            if (indicator){
                judgeFound=temp;
            }
        }
    }
    return judgeFound;
}
graph(4);
var trust = [[0,2],[1,2],[3,2],[0,1],[1,3]];
for(let i=0; i<trust.length; i++){
    AdjMatrix[trust[i][0]].push(trust[i][1]);
}
console.log(townJudge());