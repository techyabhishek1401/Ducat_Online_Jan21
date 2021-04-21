let t = Promise.resolve(1);
t.then(data => console.log("data:", data));

// let t2 = Promise.reject(new Error("Promise rejected"));
// t2.catch(error => console.log("data:", error));


let p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000)
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000)
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("error...."), 2000)
});

Promise.all([p1, p2, p3])
    .then((result) => console.log("result:", result))
    .catch(err => console.log("error:", err));

Promise.race([p1, p2]).then((result) => console.log("race result:", result))
    .catch(err => console.log("race error:", err));