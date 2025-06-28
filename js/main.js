// завдання 1
function delayedPromise(value, delay) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), delay);
    })
   }


   const promises = [delayedPromise('A', 1000), delayedPromise('B', 500), delayedPromise('C', 1500), delayedPromise('D', 700), delayedPromise('E', 1200)];


Promise.all(promises).then(result => {
       console.log('Результати:', result)
})

// завдання 2
function randomDelay(value) {
    const delay = Math.floor(Math.random() * 4001) + 1000;
    return new Promise(resolve => {
        setTimeout(() => resolve(value), delay)
    })
}


const promisess = [randomDelay('4'), randomDelay('2'), randomDelay('8'), randomDelay('3'), randomDelay('1')]
Promise.race(promisess).then(result => {
    console.log(result)
})