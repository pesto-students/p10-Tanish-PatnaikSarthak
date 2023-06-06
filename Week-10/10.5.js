//Program to find the town judge
function townJudge(n, trust){
    var judgeFound=-1;
    var trustsOtherPerson = new Array(n);
    var countOfPeopleTrusting = new Array(n);
    for(let i=0; i<n; i++){
        trustsOtherPerson[i]=0;
        countOfPeopleTrusting[i]=0;
    }
    for(let [i,j] in trust){
        trustsOtherPerso[i]=1;
        countOfPeopleTrusting[j]+=1;
    }
    for(let i=0;i<n;i++){
        if(trustsOtherPerson[i]==0 && countOfPeopleTrusting[i==n-1]){
            judgeFound=i;
        }
    }
    return judgeFound;
}
graph(4);
var trust = [[0,2],[1,2],[3,2],[0,1],[1,3]];
console.log(townJudge(4,trust));
//Time complexity: O(n)
//Space complexity: O(n)
