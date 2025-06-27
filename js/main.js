function delayedPromise(value, delay) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value));
    }, delay)
   }
   const promises = [
    delayedPromise('A', 1000),
    delayedPromise('B', 500),
    delayedPromise('C', 1500),
    delayedPromise('D', 700),
    delayedPromise('E', 1200)
];
Promise.all(promises).then(result => {
       console.log('Результати:', result)
})