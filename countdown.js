function countDown(time) {
    return new Promise((resolve, reject) => {
        if(time <= 0){
            reject('Enter a positive value')
        } else {
            const counter = setTimeout(() => {
                resolve('Finished')
                clearTimeout(counter)
            },time)

        }
    })
}


const startingTime = document.getElementById('startingTime')
const timeStarter = document.getElementById('timeStarter')
const timeDisplay = document.getElementById('timeDisplay')

timeStarter.addEventListener('click', () => {
    const time = parseInt(startingTime.value)
        countDown(time).then((message) => {
            alert(message)
        })
        .catch((Error) => {
            alert(Error)
})



})