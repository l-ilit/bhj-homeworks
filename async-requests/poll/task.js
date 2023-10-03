const poll = document.querySelector('.poll');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            const object = JSON.parse(xhr.responseText);
            poll.insertAdjacentHTML('afterBegin', '<div class="poll__title" id="poll__title"></div><div class="poll__answers poll__answers_active" id="poll__answers"></div>');
            const pollTitle = document.getElementById('poll__title');
            pollTitle.textContent = object.data.title;
            for (let item in object.data.answers) {
                const pollAnswers = document.getElementById('poll__answers');
                pollAnswers.insertAdjacentHTML('afterBegin', '<button class="poll__answer"></button>');
                const pollAnswer = document.querySelector('.poll__answer')
                pollAnswer.textContent = object.data.answers[item];
                pollAnswer.querySelector('.poll__answer').addEventListener('click', () =>{
                    alert('Спасибоб, ваш голос засчитан!');
                    location.reload();
                })
            }
        }   else {
            console.error('Error', xhr.status);
        } 
    }
 } )
