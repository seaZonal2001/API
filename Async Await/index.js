async function getPosts(){
    const response=await fetch('https://jsonplaceholder.typicode.com/posts');
    const postsData=await response.json();
    return postsData;
}
getPosts().then(data =>{
    console.log(data);
});