/*
    Informational Responses (100-199)
    Successful Responses (200-299)
    Redirects (300-399)
    Client error (400-499)
    Server Error (500-599)
*/


const btn=document.querySelector('button');
const para=document.querySelector('p')

btn.addEventListener('click',textData);

function textData(){
    const xhr=new XMLHttpRequest();//creation
    
    xhr.open('GET','data.txt',true);//setup

    xhr.onload=function (){
        if(this.status===200){ //this points to xhr object
            console.log(this.responseText);
            para.innerText=this.responseText;
        }
    }

    xhr.send();//send request
}