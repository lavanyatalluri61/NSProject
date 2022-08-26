/**
 * Promise is a buil-in class in JS which helps in working with async code easily
 */

const first_promise = new Promise((resolve, reject) => {
    //Do some time taking async task.

    //if task was successful then call resolve()
    resolve("success");

    //if the task fails then call reject()
    reject("failed");
});

first_promise.then(
    (response) => {
        console.log("First callback " + response);
    },

    (response) => {
        console.log("Second callback " + response);
    }
)