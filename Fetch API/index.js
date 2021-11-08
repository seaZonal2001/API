//Example 1 : Make request to get users

// fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
//     console.log(response);    
// }).catch(error =>{
//     console.log(error);
// });

//Example 2: Make request to get users

fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
    return response.json();   //Converted to json -> read -> parsed (returns a promise)
}).then(users=>{
    console.log(users);
}).catch(error =>{
    console.log(error);
})