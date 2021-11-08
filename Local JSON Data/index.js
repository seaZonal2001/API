const questionsBtn=document.querySelector('button');
const questionsContainer=document.querySelector('.questions-container');

questionsBtn.addEventListener('click',getQuestions);

function getQuestions(){
    const xhr=new XMLHttpRequest();

    xhr.open('GET','../questions.json',true);

    xhr.onload=function(){
        if(this.status===200 && this.readyState===4){
            const questions=JSON.parse(this.responseText);
            let questionsResult="";
            questions.forEach(question =>{
                questionsResult+=`
                    <ul>
                        <p>${question.question}</p>
                        <li>${question.choiceA}</li>
                        <li>${question.choiceB}</li>
                        <li>${question.choiceC}</li>
                        <li>${question.choiceD}</li>
                    </ul>
                `;
            });
            questionsContainer.innerHTML=questionsResult;
        }
    };

    xhr.send();
}