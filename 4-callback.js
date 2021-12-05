const iPromise = new Promise((resolve, reject) => {
    const num = Math.random()

    if (num > .5) {
        return resolve(num)
    }

    return reject('Number is too small')

})
function run() {
    iPromise.then((num) => {
        console.log('The number is ', num)
    }).catch((e) => {
        console.error(e)
    })
}

run()