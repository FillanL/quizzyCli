export const answersOptions:string[] = [
"O(1)",
"O(n)",
"O(log n)",
"O(n log n)",
"O(n^2)",
"O(n^3)",
]

export enum ANSWER{
    O1,
    On,
    OlogN,
    OnLogN,
    On2,
    On3
}
export class Question {
    private static options = answersOptions;
    constructor(
        private question: string, 
        private answer: string
    ){
        this.answer = answer;
        this.question = question;
    }
    
    public getQuestion(): string{
        return this.question;
    }
    public getAnswer(): string{
        return this.answer;
    }
    public getOptions(): string[]{
        return Question.options;
    }
}
export const listOfQuestions: Question[] = [
    new Question("What is the time complexity of the following function?", answersOptions[ANSWER.O1]!),
    new Question("What is the time complexity of the following 3", answersOptions[ANSWER.O1]!)
]