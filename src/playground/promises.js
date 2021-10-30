/*
Promises are used to handle asynchronous operations in JavaScript. 
They are easy to manage when dealing with multiple asynchronous operations
where callbacks can create callback hell leading to unmanageable code.
Prior to promises events and callback functions were used but 
they had limited functionalities and created unmanageable code.
Multiple callback functions would create callback hell that leads to unmanageable code.
Events were not good at handling asynchronous operations.
Promises are the ideal choice for handling asynchronous operations in the simplest manner.
They can handle multiple asynchronous operations easily and provide better error handling than callbacks and events.
*/


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Rey',
            age:23
        });
        //reject('something went wrong')
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log( '1',data);
    return 'some data';
}).then((str) => {
    console.log('does this run ?', str)
}).catch((error) => {
    console.log('error:', error)
});

console.log('after');