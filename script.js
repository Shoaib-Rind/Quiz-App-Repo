const data = [
    {
        qno: 1,
        question: "What does HTML stand for?",
        opt: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hight Text Markup Language",
        ],
        correct: "Hyper Text Markup Language",
    },
    {
        qno: 2,
        question: "Which of the following is used to style a web page?",
        opt: ["HTML", "CSS", "JavaScript", "Python"],
        correct: "CSS",
    },
    {
        qno: 3,
        question: "Inside which HTML element do we put the JavaScript?",
        // opt: ["<javascript>", "<js>", "<script>", "<scripting>"],
        opt: ["javascript", "js", "script", "scripting"],
        // correct: "<script>",
        correct: "script",
    },
    {
        qno: 4,
        question: "Which CSS property controls the text size?",
        opt: ["font-size", "text-style", "font-style", "text-size"],
        correct: "font-size",
    },
    {
        qno: 5,
        question: "How do you create a function in JavaScript?",
        opt: [
            "function myFunction()",
            "function = myFunction()",
            "function:myFunction()",
            "myFunction(): function"
        ],
        correct: "function myFunction()",
    },
    {
        qno: 6,
        question: "JavaScript is a case-sensitive language.",
        opt: [
            "true",
            "false",
        ],
        correct: "true",
    },
    {
        qno: 7,
        question: "How to change the background color in CSS?",
        opt: ["color", "background-color", "bgcolor", "background"],
        correct: "background-color",
    },
    {
        qno: 8,
        question: "How do you write 'Hello World' in an alert box in JavaScript?",
        opt: [
            "msg('Hello World');",
            "alert('Hello World');",
            "msgBox('Hello World');",
            "alertBox('Hello World');"
        ],
        correct: "alert('Hello World');",
    },
    {
        qno: 9,
        question: "let x = 10; let y = 5; console.log(x + y + '5')",
        opt: ["20", "155", "NaN", "'155'"],
        correct: "'155'",
    },
    {
        qno: 10,
        question: "Which CSS property is used to make the text bold?",
        opt: ["font-style", "font-weight", "text-bold", "weight"],
        correct: "font-weight",
    },
    {
        qno: 11,
        question: "How do you declare a JavaScript variable?",
        opt: ["var myVariable;", "variable myVariable;", "v myVariable;", "declare myVariable;"],
        correct: "var myVariable;",
    },
    {
        qno: 12,
        question: "let x = 10; let y = 5; console.log(typeof(x + y))",
        opt: ["boolean", "string", "NaN", "Number"],
        correct: "string",
    },
    {
        qno: 13,
        question: "How can you add a comment in CSS?",
        opt: [
            "// This is a comment",
            "/* This is a comment */",
            "# This is a comment"
        ],
        correct: "/* This is a comment */",
    },
    {
        qno: 14,
        question: "Which method is used to find the length of a string in Js?",
        opt: [".size()", ".length()", ".getLength()", ".len()"],
        correct: ".length()",
    },
    {
        qno: 15,
        question: "How do you declare a variable in JavaScript?",
        opt: [
            "var variableName; ",
            "let variableName; ",
            "const variableName; ",
            "All of Them",
        ],
        correct: "All of Them",
    },
    {
        qno: 16,
        question: "Which property is used to set the spacing between lines of text?",
        opt: ["line-height", "letter-spacing", "spacing", "text-spacing"],
        correct: "line-height",
    },
    {
        qno: 17,
        question: "Which of the following is the correct syntax in JavaScript?",
        opt: ["'console.log('Hello');'", "'log.console('Hello');'", "'print('Hello');'", "'echo('Hello');'"],
        correct: "'console.log('Hello');'",
    },
    {
        qno: 18,
        question: "What does the <br> tag in HTML do?",
        opt: [
            "Makes text bold",
            "Adds a break between lines",
            "Creates a horizontal line",
            "None of the above"
        ],
        correct: "Adds a break between lines",
    },
    {
        qno: 19,
        question: "How do you select an element with id 'demo' in CSS?",
        opt: ["#demo", ".demo", "demo", "*demo"],
        correct: "#demo",
    },
    {
        qno: 20,
        question: "Which symbol is used for single-line comments in JavaScript?",
        opt: ["//", "/* */", "#"],
        correct: "//",
    },
    {
        qno: 21,
        question: "Which HTML attribute specifies an alternate text for an image?",
        opt: ["src", "title", "alt", "longdesc"],
        correct: "alt",
    },
    {
        qno: 22,
        question: "What is the default value of the position property in CSS?",
        opt: ["relative", "absolute", "static", "fixed"],
        correct: "static",
    },
    {
        qno: 23,
        question: "JavaScript method used to round a number to the nearest integer?",
        opt: ["Math.round()", "Math.ceil()", "Math.floor()", "Math.rnd()"],
        correct: "Math.round()",
    },
    {
        qno: 24,
        question: "What does the <ul> tag in HTML represent?",
        opt: [
            "A bold text list",
            "An ordered list",
            "An unordered list",
            "A description list"
        ],
        correct: "An unordered list",
    },
    {
        qno: 25,
        question: "Which CSS property is used to control the layout of an element?",
        opt: ["float", "position", "display", "layout"],
        correct: "display",
    },
    {
        qno: 26,
        question: "How do you add an event listener in JavaScript?",
        opt: [
            "element.attachEvent()",
            "element.addEventListener()",
            "element.setEventListener()",
            "element.addListener()"
        ],
        correct: "element.addEventListener()",
    },
    {
        qno: 27,
        question: "Which HTML tag is used to define a table row?",
        opt: ["tr", "td", "th", "table-row"],
        correct: "tr",
    },
    {
        qno: 28,
        question: "Which CSS property is used to hide an element?",
        opt: ["visibility", "display", "opacity", "hide"],
        correct: "display",
    },
    {
        qno: 29,
        question: "Which JavaScript keyword is used to define a constant?",
        opt: ["var", "let", "constant", "const"],
        correct: "const",
    },
    {
        qno: 30,
        question: "What does DOM stand for?",
        opt: [
            "Document Object Model",
            "Data Object Model",
            "Document Oriented Model",
            "Data Oriented Model"
        ],
        correct: "Document Object Model",
    },
];


let h2 = document.getElementById("h2");
let optBox = document.getElementById("opt");
let sec1 = document.getElementById("sec1");
let sec2 = document.getElementById("sec2");
let sec3 = document.getElementById("sec3");
let ind = document.getElementById("ind");

let sec3Score = document.getElementById("sec3Score");
let per = document.getElementById("percentage");
let secTime = document.getElementById("secTime");

let index = 0;
let score = 0;

let checkScore = (e) => {

    // console.log(e.target);
    ind.innerText = index;

    if (e.target.textContent == data[index - 1].correct) {
        score++
        // console.log(true);
        console.log("score", score);
        return
    }
    // console.log(false);

}

let questionShow = () => {

    sec1.style.display = "none";
    sec2.style.display = "flex";

    try {

        optBox.innerHTML = "";
        h2.innerHTML = data[index].question;


        for (var i in data[index].opt) {
            var list = document.createElement("button");
            list.setAttribute("class", "ansItem");
            list.setAttribute("onClick", "checkScore(event), questionShow()");
            list.innerHTML = data[index].opt[i]
            optBox.appendChild(list);
            // console.log(list);
        }
        index++

    } catch (err) {
        // alert("over");
        sec2.style.display = "none";
        sec3.style.display = "flex";
        sec3Score.innerText = score;
        per.innerHTML = ((score / 30) * 100);
    }

};


let quitfunc = () => {
    location.reload();
}

let timeRemaining = 15 * 60; // 15 minutes converted to seconds (15 * 60 = 900)
let countdown; // Variable to store the countdown interval

function startTimer() {
    
    countdown = setInterval(function () {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;

        secTime.innerHTML = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

        if (timeRemaining <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
        }

        timeRemaining--;
    }, 1000);
}