const quizData = [
    {
        question: "How can we end the line code in C?",
        a: ";",
        b: ".",
        c: "+",
        d: "Others",
        correct: "a",
    },
    {
        question: "How can we make conditions in C?",
        a: "if",
        b: "switch",
        c: "Both of them",
        d: "None of them",
        correct: "c",  
    },
    {
        question: "How can we make a loop in C?",
        a: "for",
        b: "while",
        c: "do while",
        d: "All of them",
        correct: "d", 
    },

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionE1 = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getelmentById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQiuzData = quizData(currentQuiz)

    questionE1.innerText = currentQiuzData.question
    a_text.innerText = currentQiuzData.a
    b_text.innerText = currentQiuzData.b
    c_text.innerText = currentQiuzData.c
    d_text.innerText = currentQiuzData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected(){
    let answerEls
    answerEls.forEach(answerEls =>{
        if(answerEls.checked){
            answer = answerEls.id
        }
    })
    return answer
}


