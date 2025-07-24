// step 1: define quiz data   array--->object--->array
const quizData=[
    {
        question: "what does HTML stand for?",
        options:[
            "HyperText Markup Language ",
            "HighText Machine Language",
            "HyperTool Multi Language",
            "Home Tool Markup Language",
        ],
        correct:0,
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "<a>",
            "<link>",
            "<href>",
            "<url>"
        ],
        correct: 0
   },
    {
        question:" What does CSS stand for?",
        options:[
            "Computer Style Sheets",
            "Creative Style Syntax",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ],
        correct:2
    },
    {
        question: "What does JS stand for in web development?",
        options: [
            "Java Structure",
            "Java Style",
            "JavaScript",
            "JustScript"
        ],
        correct: 2
    },
    {
        question: "Which property is used in CSS to change text color?",
        options: [
            "font-color",
            "text-style",
            "text-color",
            "color"
        ],
        correct: 3
    },
]

//step 2: javascript initalization reference create 
const quiz= document.querySelector("#quiz");
const answerElm = document.querySelectorAll(".answer");
// const option_1=document.querySelector('#option_1');
// const option_2=document.querySelector('#option_2');
    const [questionElm,  option_1, option_2, option_3, option_4]=
    document.querySelectorAll(
        "#question, #option_1, #option_2, #option_3, #option_4"
    );
    const submitBtn =document.querySelector("#submit");

let currentQuiz=0;
let score=0;

//step 3: load Quiz function
const loadQuiz=()=>{
    const { question , options } = quizData[currentQuiz];
    console.log(question);
    questionElm.innerText=`${currentQuiz + 1 } : ${question}`;
    options.forEach(
        (curOption,index) => (window[`option_${index + 1}`].innerText=curOption)
    );
};
loadQuiz();

//step 4: Get Selected Answer function on button click
const getSelectedOption= () =>{
    let ans_index;
    answerElm.forEach((curOption, index) =>{
        if(curOption.checked) {
            ans_index=index;
        }
    });
    return ans_index;
};

//deselectedAnswer function
const deselectedAnswer = () => {
    answerElm.forEach((curOption) => (curOption.checked = false));
};


submitBtn.addEventListener('click', () => {
    const selectedOptionIndex=getSelectedOption();
    console.log(selectedOptionIndex);
    if(selectedOptionIndex === quizData[currentQuiz].correct) {
         score++;
        }

    
    currentQuiz++;

    if(currentQuiz < quizData.length) {
        deselectedAnswer();
        loadQuiz();
    }else{
        quiz.innerHTML=`
            <div class="result">
            
            <h2>🏆 Quiz completed! Your score is: ${score}/${quizData.length} Correct Answer</h2>
            <p>Thank you for participating!🥳</p>
            <button class="reload-button" onclick="location.reload()">Play Again</button>
            </div>
        `;
   }
})