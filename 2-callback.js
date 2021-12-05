function getFutureTime(cb) {
    setTimeout(() => {
        return cb(new Date())
    }, 1000)
}

function run() {
    getFutureTime((date) => {
        console.log(`The date is ${date}`)
    })
}

run()