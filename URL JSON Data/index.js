// https://jsonplaceholder.typicode.com/

const getDataBtn=document.querySelector('button');

getDataBtn.addEventListener('click',getData);

function getData(){
    const data=new XMLHttpRequest();

    data.addEventListener('readystatechange',function(){
        if(this.status===200 && this.readyState===4){
            console.log(JSON.parse(this.responseText));
        }
    });

    data.open('GET',"https://jsonplaceholder.typicode.com/users",true);

    data.send();
    
}