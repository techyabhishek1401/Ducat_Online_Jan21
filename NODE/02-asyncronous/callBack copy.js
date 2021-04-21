
console.log("Before");

getUser(1, getRepositoriesNamedFunction);


/*-----------------------------Named Function Start */

function getRepositoriesNamedFunction(user) {
    getRepositories(user.gitHubUsername, getCommitsNamedFunction)
}
function getCommitsNamedFunction(repos) {
    getCommits(repos[0], displayCommits)
}
function displayCommits(commits) {
    console.log("commits:", commits)
}

// function getNewCommits(repos){
//     getCommits(repos[0],displayCommits)
// }

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