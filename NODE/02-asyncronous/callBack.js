/* 
synchronous: Blocking
asynchronous: Non blocking
*/


console.log("Before");


getUser(1, function (user) {
    console.log("user:", user)
    getRepositories(user.gitHubUsername, (repos) => {
        console.log("repos:", repos);
        getCommits(repos[0], (commits) => {
            console.log("commits:", commits)
        })
    })
});

console.log("After");

/**
let promise=new Promise((resolve,reject)=>{
    // success 
 return   resolve(success data);
    //fail
  return  reject(error msg)
});
promise(1).then((res)=>{
    console.log("res:",res)
}).catch(err=>console.log("error"))
 */

function getUser(id, callback) {
    setTimeout(() => {
        console.log("Requestin a user from a Data base");
        callback({ id: id, gitHubUsername: "abhishek" })
    }, 2000)
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log("Requestin a Repositories of a user");
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000)
}


function getCommits(repo, callback) {
    setTimeout(() => {
        console.log("Requestin a commit list  of a repo");
        callback(['commit1', 'commit2', 'commit3'])
    }, 2000)
}
function displayCommits(commits) {
    console.log("commits:", commits)
}