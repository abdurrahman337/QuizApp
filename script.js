const questions1 = [
    
    {
        question:"Vilken stad är Turkiets huvudstad ?",
        answers:[
            
                {text:"Ankara", correct:true},
                {text:"Izmir", correct:false},
                {text:"Istanbul", correct:false},
                {text:"Bursa", correct:false},
                {text:"Antalya", correct:false},

            
        ]
    },
    {
        question:"Vilken stad är Storbrittaniens huvudstad ?",
        answers:[
            
                {text:"Manchester", correct:false},
                {text:"London", correct:true},
                {text:"Birmingham", correct:false},
                {text:"Newcastle", correct:false},
                {text:"Edinburgh", correct:false},

            
        ]

        
    },
    {
        question:"Vilken stad är Greklands huvudstad ?",
        answers:[
            
                {text:"Skopelos", correct:false},
                {text:"Thessaloniki", correct:false},
                {text:"Tolo", correct:false},
                {text:"Aten", correct:true},
                {text:"Pireas", correct:false},

            
        ]
    },
 
    {
        question:"Vilket land är det största i världen ?",
        answers:[
            
               {text:"Turkiyet", correct:false},
               {text:"Japan", correct:false},
               {text:"Rysland", correct:true},
               {text:"Usa", correct:false},
               {text:"Indian", correct:false},        
        
        ]
    },
    {
        question:"Vilken land är minst i världen ?",
        answers:[
            
                {text:"Vietnam", correct:false},
                {text:"Kazakstan", correct:false},
                {text:"Uzbekistan", correct:false},
                {text:"Vatikanstaten", correct:true},
                {text:"Norge", correct:false}

            
        ]
    },
    {
        question:"Vad heter världens största berg ?",
        answers:[
            
                {text:"Mont Blanc", correct:false},
                {text:"Kanchenjunga", correct:false},
                {text:"Mount Everest", correct:true},
                {text:"K2", correct:false},
                {text:"Makalu", correct:false},

            
        ]
    },
  
    {
        question:"Europas största sjö ?",
        answers:[

                {text:"Ladoga", correct:true},
                {text:"Onega", correct:false},
                {text:"Kujbysjevreservoaren ", correct:false,},
                {text:"Michigan-Huron", correct:false},
                {text:"Vänern", correct:false},

            
        ]
    },
    {
        question:"Vilken flygplats är störst i Europa? ?",
        answers:[
                {text:"Paris-Charles de Gaulle flygplats", correct:false},
                {text:"London-Heathrow flygplats", correct:false},
                {text:"Amsterdam-Schiphols flygplats", correct:true},
                {text:"Stockholm Arlanda Airport.", correct:false},
                {text:"Frankfurt Mains flygplats", correct:false},

        ]

    }

]






const questions2 = [
    
    {
        question:"Hur många landskap finns det i Sverige ? ",
        answers:[
            
                {text:"15", correct:false},
                {text:"21", correct:false},
                {text:"30", correct:false},
                {text:"25", correct:true},
                {text:"17", correct:false},

            
        ]
    },
    {
        question:"Vad heter Sveriges största sjö ?",
        answers:[
            
                {text:"Siljan", correct:false},
                {text:"Vänern", correct:true},
                {text:"Mälaren", correct:false},
                {text:"Vättern", correct:false},
                {text:"Vinterviken", correct:false},

            
        ]

        
    },

    {
        question:"Hur många invånare har Sverige? (cirka) ? ",
        answers:[
            
                {text:"12 Miljoner", correct:false},
                {text:"15,5 Miljoner", correct:false},
                {text:"10,5 Miljoner", correct:true},
                {text:"9,5 Miljoner", correct:false},
                {text:"13,5 Miljoner", correct:false},

            
        ]
    },
    {
        question:"Vilken är Sveriges nationalblomma? ",
        answers:[
            
                {text:"Liten blåklocka", correct:true},
                {text:"Blåklint", correct:false},
                {text:"Skogsstjärna", correct:false},
                {text:"Prästkrage", correct:false},
                {text:"Vitsippa", correct:false},

            
        ]

        
    },
    
    {
        question:"Vilket datum firas den svenska nationaldagen? ",
        answers:[
            
                {text:"4 Juli", correct:false},
                {text:"30 April", correct:false},
                {text:"6 Juni", correct:true},
                {text:"1 Maj", correct:false},
                {text:"24 December", correct:false},

            
        ]
    },
    {
        question:"Stockholm, Göteborg och Malmö är Sveriges tre största städer. Vilken är den fjärde största staden i Sverige? (antal invånare) ",
        answers:[
            
                {text:"Linköping", correct:false},
                {text:"Uppsala", correct:true},
                {text:"Helsingborg", correct:false},
                {text:"Örebro", correct:false},
                {text:"Malmö", correct:false},

            
        ]

        
    },
    {
        question:"Vem brukar nämnas som Sveriges förste kung som härskat över både Svealand och Götaland? ",
        answers:[
            
                {text:"Olof Skötkonung", correct:true},
                {text:" Karl Knutsson ", correct:false},
                {text:"Magnus Ladulås", correct:false},
                {text:"Birger Jarl", correct:false},
                {text:"Bertil Gustansson", correct:false},

            
        ]
    },
    {
        question:"Vilket är Sveriges högsta berg? ",
        answers:[
            
                {text:"Sarektjåkkå", correct:false},
                {text:"Helags", correct:false},
                {text:"Kebnekaise", correct:true},
                {text:"K2", correct:false},
                {text:"Storvätteshågna", correct:false},

            
        ]

        
    },
];


const questionElement = document.getElementById("question");  //Vi sätter variabel för våran Question , button, 
const answerButtons = document.getElementById("aswer-buttons");
const nextButton = document.getElementById("next-btn");
const categoryContainer = document.getElementById("categoryContainer")
const quizContainer = document.getElementById("quizContainer")


let currentQuestionIndex = 0;
let score = 0;
let questions = []

function matteFunc() {
    currentQuestionIndex = 0;  //   den nollar alltid när man startar appen
    score = 0;  // Skor bilir alltid 0 ocså
    questions = []
    console.log("hejfhdjs mat")
    questions = questions1
    startQuiz();
}

function geoFunc() {
    currentQuestionIndex = 0;  //   den nollar alltid när man startar appen
    score = 0;  // Skor bilir alltid 0 ocså
    questions = []
    console.log("hejfhdjs geoFunc")
    questions = questions2
    startQuiz();
}


function startQuiz() {   //Här startar vi   Quzin och startar från 0
 
    categoryContainer.style.display = "none"
    quizContainer.style.display = "block"
    nextButton.innerHTML = "Next";
    showQuestion(); // sedan hämtar vi ny den functionen för frågerna 

}

function showQuestion(){
    resetState();           //Först displeyar vi frågen här 
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; //       <h1>Time to Quiz Are You Ready ?</h1> uppdaterar vi den 

     currentQuestion.answers.forEach(answer => {     //Börjar vi här displaye ansver
        const button = document.createElement("button"); 
        button.innerHTML = answer.text;  //Förs hemtar fösrta texten in aswes sedan andra sedan 3 diye och 4 , 5
        button.classList.add("btn");
        answerButtons.appendChild(button);   // displeyer resultatte inni den diven som vi har i html filen      <div id="aswer-buttons">
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);

    });


}
function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Agein";
    nextButton.style.display = "block";

}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }

}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        // startQuiz();
        console.log("stara om")
        categoryContainer.style.display = "block"
        quizContainer.style.display = "none"
    }
})

// startQuiz();






// const questionsMatte = [
//     {
//         question:"Vilken stad är fhfhfh huvudstad ?",
//         answers:[
            
//                 {text:"Ankara", correct:true},
//                 {text:"Izmir", correct:false},
//                 {text:"Istanbul", correct:false},
//                 {text:"Bursa", correct:false},
//                 {text:"Antalya", correct:false},

            
//         ]
//     },
//     {
//         question:"Vilken jjjjjjjjjj stad är Storbrittaniens huvudstad ?",
//         answers:[
            
//                 {text:"Manchester", correct:false},
//                 {text:"London", correct:true},
//                 {text:"Birmingham", correct:false},
//                 {text:"Newcastle", correct:false},
//                 {text:"Edinburgh", correct:false},

            
//         ]

        
//     },


// ]
// const questionsCountry = [
    
//     {
//         question:"Vilken stad är Turkiets huvudstad ?",
//         answers:[
            
//                 {text:"Ankara", correct:true},
//                 {text:"Izmir", correct:false},
//                 {text:"Istanbul", correct:false},
//                 {text:"Bursa", correct:false},
//                 {text:"Antalya", correct:false},

            
//         ]
//     },
//     {
//         question:"Vilken stad är Storbrittaniens huvudstad ?",
//         answers:[
            
//                 {text:"Manchester", correct:false},
//                 {text:"London", correct:true},
//                 {text:"Birmingham", correct:false},
//                 {text:"Newcastle", correct:false},
//                 {text:"Edinburgh", correct:false},

            
//         ]

        
//     },
//     {
//         question:"Vilken stad är Greklands huvudstad ?",
//         answers:[
            
//                 {text:"Skopelos", correct:false},
//                 {text:"Thessaloniki", correct:false},
//                 {text:"Tolo", correct:false},
//                 {text:"Aten", correct:true},
//                 {text:"Pireas", correct:false},

            
//         ]
//     },
 
//     {
//         question:"Vilken land är största i världen ?",
//         answers:[
            
//                {text:"Turkiyet", correct:false},
//                {text:"Japan", correct:false},
//                {text:"Rysland", correct:true},
//                {text:"Usa", correct:false},
//                {text:"Indian", correct:false},        
        
//         ]
//     },
//     {
//         question:"Vilken land är minst i världen ?",
//         answers:[
            
//                 {text:"Vietnam", correct:false},
//                 {text:"Kazakstan", correct:false},
//                 {text:"Uzbekistan", correct:false},
//                 {text:"Vatikanstaten", correct:true},
//                 {text:"Norge", correct:false}

            
//         ]
//     },
//     {
//         question:"Vad heter världens största berg ?",
//         answers:[
            
//                 {text:"Mont Blanc", correct:false},
//                 {text:"Kanchenjunga", correct:false},
//                 {text:"Mount Everest", correct:true},
//                 {text:"K2", correct:false},
//                 {text:"Makalu", correct:false},

            
//         ]
//     },
  
//     {
//         question:"Vart bor världens äldsta människa ?",
//         answers:[

//                 {text:"Italian", correct:false},
//                 {text:"China", correct:false},
//                 {text:"Albanien", correct:false,},
//                 {text:"Tyskland", correct:false},
//                 {text:"Indien", correct:false},

            
//         ]
//     },
//     {
//         question:"Vilken flygplats är störst i Europa? ?",
//         answers:[
//                 {text:"Paris-Charles de Gaulle flygplats", correct:false},
//                 {text:"London-Heathrow flygplats", correct:false},
//                 {text:"Amsterdam-Schiphols flygplats", correct:true},
//                 {text:"Stockholm Arlanda Airport.", correct:false},
//                 {text:"Frankfurt Mains flygplats", correct:false},


//         ]

//     }

// ];
// const questionElement = document.getElementById("question");  //Vi sätter variabel för våran Question , button, 
// const answerButtons = document.getElementById("aswer-buttons");
// const nextButton = document.getElementById("next-btn");
// const  catagoriesContainer= document.getElementById("catagoriesContainer");
// const  questionContainer = document.getElementById("questionContainer");
// const  resultContainer = document.getElementById("resultContainer");

// //const  appId2 = document.getElementById("appId2");







// let currentQuestionIndex = 0;
// let score = 0;
// let question = []


// function startQuiz() {   //Här startar vi   Quzin och startar från 0
//     currentQuestionIndex = 0;  //   den nollar alltid när man startar appen
//     score = 0;  // Skor bilir alltid 0 ocså
//     nextButton.innerHTML = "Next";
//     showQuestion(); // sedan hämtar vi ny den functionen för frågerna 


// }

// function mattebuttonf() {
//     catagoriesContainer.style.display = "none";
//   questionContainer.style.display = "block"
//   question = questionsMatte;
//   startQuiz()
  
// }
// /*
// function geografibutton() {
//     catagories.style.display = "none";
//   appId2.style.display = "block"
//     question = questionsCountry;
//   startQuiz()

    
// }*/

// /*
// var sec = 15;
// var time = setInterval(myTimer, 1000);

// function myTimer() {
//     document.getElementById('timer').innerHTML = sec + "sec left";
//     sec--;
//     if (sec == -1) {
//         clearInterval(time);
//         alert("Time out!! :(");
//     }
// }*/

// function showQuestion(){
//     resetState();  
//     let currentQuestion  = question[currentQuestionIndex];
//     //let currentQuestion = questions[currentQuestionIndex];
//     questionElement.innerHTML = currentQuestionIndex + ". " + currentQuestion.question; //       <h1>Time to Quiz Are You Ready ?</h1> uppdaterar vi den 

//      currentQuestion.answers.forEach(answer => {     //Börjar vi här displaye ansver
//         const button = document.createElement("button"); 
//         button.innerHTML = answer.text;  //Förs hemtar fösrta texten in aswes sedan andra sedan 3 diye och 4 , 5
//         button.classList.add("btn");
//         answerButtons.appendChild(button);   // displeyer resultatte inni den diven som vi har i html filen      <div id="aswer-buttons">
//         if(answer.correct){
//             button.dataset.correct = answer.correct
//         }
//         button.addEventListener("click", selectAnswer);

//     });


// }
// function resetState(){
//     nextButton.style.display ="none";
//     while(answerButtons.firstChild){
//         answerButtons.removeChild(answerButtons.firstChild);
//     }

// }

// function selectAnswer(e){
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
//     if(isCorrect){
//         selectedBtn.classList.add("correct");
//         score++;
//     }else{
//         selectedBtn.classList.add("incorrect");
//     }
//     Array.from(answerButtons.children).forEach(button => {
//         if(button.dataset.correct === "true"){
//             button.classList.add("correct")
//         }
//         button.disabled = true;

//     });
//     nextButton.style.display = "block";
//     nextButton.addEventListener("click", function(){
//        currentQuestionIndex++;
//        if(currentQuestionIndex > question.length){
//         showScore()
//        }else{
        
//         showQuestion()

//        }
    

//     })

// }

// function showScore(){
//     questionContainer.style.display = "none"
//     resultContainer.style.display ="block"
//     const p = document.createElement("p"); 
//     p.innerText = `You scored ${score} out of `;
//     resultContainer.appendChild(p)
//      //Förs hemtar fösrta texten in aswes sedan andra sedan 3 diye och 4 , 5    
//     //resetState();
//     /*resultContainer.innerHTML = `You scored ${score} out of ${questions.length}!`;
//     nextButton.innerHTML = "Play Agein";
//     nextButton.style.display = "block";*/
// }


// function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < question.length){
//         showQuestion();
//     }else{
//         showScore();
//     }

// }

// nextButton.addEventListener("click", handleNextButton)

// startQuiz();


