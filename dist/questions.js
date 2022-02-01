export const answersOptions = [
    "O(1)",
    "O(n)",
    "O(log n)",
    "O(n log n)",
    "O(n^2)",
    "O(n^3)",
];
export var ANSWER;
(function (ANSWER) {
    ANSWER[ANSWER["O1"] = 0] = "O1";
    ANSWER[ANSWER["On"] = 1] = "On";
    ANSWER[ANSWER["OlogN"] = 2] = "OlogN";
    ANSWER[ANSWER["OnLogN"] = 3] = "OnLogN";
    ANSWER[ANSWER["On2"] = 4] = "On2";
    ANSWER[ANSWER["On3"] = 5] = "On3";
})(ANSWER || (ANSWER = {}));
export class Question {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
        this.answer = answer;
        this.question = question;
    }
    getQuestion() {
        return this.question;
    }
    getAnswer() {
        return this.answer;
    }
    getOptions() {
        return Question.options;
    }
}
Question.options = answersOptions;
export const listOfQuestions = [
    new Question("What is the time complexity of the following function?", answersOptions[ANSWER.O1]),
    new Question("What is the time complexity of the following 3", answersOptions[ANSWER.O1])
];
