//array which contains number, questions, options, and answers

let questions = [
    {
        numb: 1,
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answer: "Both of the above.",
        options: [
            "var",
            "let",
            "Both of the above.",
            "None of the above."
        ]
    },
    {
        numb: 2,
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answer: "Both of the above.",
        options: [
            "getElementById()",
            "getElementByClassName()",
            "Both of the above.",
            "None of the above."
        ]
    },
    {
        numb: 3,
        question: "Which of the following is a disadvantage of using JavaScript?",
        answer: "All of the above.",
        options: [
            "Client-side JavaScript does not allow the reading or writing of files",
            "JavaScript can not be used for Networking applications because there is no such support available.",
            "JavaScript doesn't have any multithreading or multiprocess capabilities.",
            "All of the above."
        ]
    },
    {
        numb: 4,
        question: "Which of the following is a valid type of function javascript supports?",
        answer: "Both of the above.",
        options: [
            "named function",
            "anonymous function",
            "Both of the above.",
            "None of the above."
        ]
    },
    {
        numb: 5,
        question: "Which built-in method returns the length of the string?",
        answer: "length()",
        options: [
            "length()",
            "size()",
            "index()",
            "None of the above."
        ]
    },
    {
        numb: 6,
        question: "Which built-in method returns the calling string value converted to lower case?",
        answer: "toLowerCase()",
        options: [
            "toLowerCase()",
            "toLower()",
            "changeCase(case)",
            "None of the above."
        ]
    },
    {
        numb: 7,
        question: "Which of the following function of Number object defines how many total digits to display of a number?",
        answer: "toPrecision()",
        options: [
            "toExponential()",
            "toFixed()",
            "toLocaleString()",
            "toPrecision()"
        ]
    },
    {
        numb: 8,
        question: "Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?",
        answer: "substr()",
        options: [
            "slice()",
            "split()",
            "substr()",
            "search()"
        ]
    },
    {
        numb: 9,
        question: "Which of the following function of String object creates an HTML anchor that is used as a hypertext target?",
        answer: "anchor()",
        options: [
            "anchor()",
            "link()",
            "blink()",
            "big()"
        ]
    },
    {
        numb: 10,
        question: ` What's the output of the following code?
                    for (var i = 0; i < 3; i++) {
                        setTimeout(() => console.log(i), 1);
                    }`,
        answer: "3 3 3",
        options: [
            "1 1 1",
            "3 2 1",
            "3 3 3",
            "1 2 3"
        ]
    },
    {
        numb: 11,
        question: "Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?",
        answer: "map()",
        options: [
            "push()",
            "join()",
            "pop()",
            "map()"
        ]
    },
    {
        numb: 12,
        question: "Which of the following function of Array object applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value?",
        answer: "reduceRight()",
        options: [
            "pop()",
            "push()",
            "reduce()",
            "reduceRight()"
        ]
    }, 
    {
        numb: 13,
        question: "Which of the following is not a javascript framework?",
        answer: "Laravel",
        options: [
            "Vue",
            "React",
            "Node",
            "Laravel"
        ]
    },
    {
        numb: 14,
        question: "Which event is related to the keyboard?",
        answer: "onkeypress",
        options: [
            "onfocus",
            "onclick",
            "onkeydown",
            "onkeypress"
        ]
    },
    {
        numb: 15,
        question: "Which on is not a mouse event?",
        answer: "onmousescroller",
        options: [
            "onmouseover",
            "onmousemove",
            "onclick",
            "onmousescroller"
        ]
    }
]