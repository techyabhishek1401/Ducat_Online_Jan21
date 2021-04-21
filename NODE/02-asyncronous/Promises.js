

console.log("Before");


// getUser(1, function (user) {
//     console.log("user:", user)
//     getRepositories(user.gitHubUsername, (repos) => {
//         console.log("repos:", repos);
//         getCommits(repos[0], (commits) => {
//             console.log("commits:", commits)
//         })
//     })
// });

// promise consuming
getUser(1)
    .then((user) => getRepositories(user.gitHubUsername))
    .then((repos) => getCommits(repos[0]))
    .then((commits) => console.log("commits:", commits))
    .catch(err => console.log(new Error('somethings went wrong')))




console.log("After");


function getUser(id, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Requestin a user from a Data base");
            resolve({ id: id, gitHubUsername: "abhishek" })
        }, 2000)
    })

}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Requestin a Repositories of a user");
            reject(['repo1', 'repo2', 'repo3'])
        }, 2000)
    })

}


function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Requestin a commit list  of a repo");
            resolve(['commit1', 'commit2', 'commit3'])
        }, 2000)
    });
}
