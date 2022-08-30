function buy_milk() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Bought Milk");
        }, 3000);
    })
}

//Using buy_milk via promise

//We are using promise for this to avoid callback hell and Asynchronous handle

buy_milk().then((result) => {
    console.log(result);
});

//Using async await

async function buy_milk_async() {
    const result = await buy_milk();
    console.log(result);
}

