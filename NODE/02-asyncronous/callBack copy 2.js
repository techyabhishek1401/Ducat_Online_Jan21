/* 
synchronous: Blocking
asynchronous: Non blocking
*/
/**
 Approaches to handle asynchronous data
   1)Callback
   2)Promises
   3)Async/await (promises with some addon sugar`)
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


//callback hell/christmas tree problem
//approach for handling callback hell--NamedFunction
// console.log("user:",user);
/**
console.log("Before");
const user=getUser(1);
const repos=getRepositories(user.gitHubUsername);
const commits=getCommits(repo[0]);
console.log("After");
 */

/*-----------------------------Named Function Start */
function getNewCommits(repos) {
    getCommits(repos[0], displayCommits)
}

/*-----------------------------Named Function End   */

console.log("After");



function getUser(id, callback) {

    setTimeout(() => {
        console.log("Requestin a user from a Data base");
        callback({ id: id, gitHubUsername: "abhishek" })
        // return {id:id,gitHubUsername:"abhishek"}
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