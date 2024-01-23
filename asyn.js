console.log('synchronous 1');

setTimeout(() => console.log('wait me another event loop'), 3000);

Promise.resolve().then(_ => console.log('Promise 3'));

console.log('synchrous 4');