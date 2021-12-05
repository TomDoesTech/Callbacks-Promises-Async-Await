function getFutureTime() {
    setTimeout(() => {
        return new Date()
    }, 1000)
}


function run() {
    const futureTime = getFutureTime()

    console.log(futureTime)
}


run()