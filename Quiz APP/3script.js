const startButton = document.getElementById('strtbtn');
const nextButton = document.getElementById('nxtbtn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-button');
const endButton = document.getElementById('end-btn');

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion()
})
let shuffledQuestions,currentQuestionIndex;

function startGame(){
    console.log('Started');
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() -.5);
    currentQuestionIndex = 0;
    setNextQuestion()

}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}
function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer);
        answerButtonsElement.appendChild(button);
            });
}
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}


function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide');

 } else {
     startButton.innerText = 'Restart';
     startButton.classList.remove('hide');
     endButton.classList.remove('hide');
 }
    

}
function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');

}



const questions= [
    {
        question:'What is 2+2?',
        answers:[
            {text:'4', correct: true},
            {text:'5', correct:false,},
            {text:'6', correct:false,},
            {text:'2', correct:false,}

        ]

    },
    {
        question:'Which language is associated with Web Development?',
        answers:[
            {text:'Python', correct:false},
            {text:'R',correct:false},
            {text:'Spanish',correct:false},
            {text:'Javascript',correct:true}
        ]
    },
    {
        question:'Which creature has blue blood?',
        answers:[
            {text:'Panther', correct:false},
            {text:'Seahorse',correct:false},
            {text:'Horse-Shoe Crab',correct:true},
            {text:'Shrimp', correct:false}
        ]
    },
    {
        question:'What is essential for achieving success?',
        answers:[
            {text:'HardWork',correct:true},
            {text:'Luck',correct:true},
            {text:'A Good Mentor', correct:true},
            {text:'Willpower',correct:true}
        ]
    },
    {
        question:'In which species, the male gives birth to the child?',
        answers:[
            {text:'Hamster',correct:false},
            {text:'Tiger Shark',correct:false},
            {text:'Giant Hornet',correct:false},
            {text:'Sea Horse',correct:true}
        ]
        

    },
    {
        question:'Which country has all the six physical features ie Mountians, Plains,Plateaus,Desert,Island,Coastal Plains ?',
        answers:[

        {text:'USA',correct:false},
        {text:'India',correct:true},
        {text:'China',correct:false},
        {text:'Russia',correct:false}
        ]
    },
    {
        question:'The Best Performance in the film Munna Bhai MBBS was delivered by? ',
        answers:[
            {text:'Dean',correct:false},
            {text:'Munna',correct:false},
            {text:'Pyaar m pagal ladka',correct:false},
            {text:'Anand Bhai',correct:true}


        ]
    },
    {
        question:'Which country does not have a railway network?',
        answers:[
            {text:'Denmark',correct:false},
            {text:'Indonesia',correct:false},
            {text:'Kazakhstan',correct:false},
            {text:'Iceland',correct:true}
        ]
    },
    {
        question:'Which is the most adventurous thing?',
        answers:[
            {text:'Bungee Jumping',correct:false},
            {text:'Scuba Diving',correct:false},
            {text:'Living the life of your dreams',correct:true},
            {text:'Base Jumping',correct:false}
        

        ]
    },
    {
        question:'If decided which one of the following can do everything he/she wants?',
        answers:[
            {text:'Donald Trump',correct:true},
            {text:'Kim Jong Un',correct:true},
            {text:'Me',correct:false},
            {text:'Sattu',correct:true}

        ]
    }
    
        
        
    
]
    