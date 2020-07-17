import QuizFetcher from "../data_fetcher/QuizFetcher";
import he from 'he';
import _ from 'lodash'

class Quiz {
 constructor({question,correctAnswer,incorrectAnswers}){
    this._question = question;
    this._incorrectAnswers = [...incorrectAnswers]
    this._correctAnswer = correctAnswer;
 }

 get question (){
     return this._question
 }

 get correctAnswer (){
    return this._correctAnswer
}

shuffleAnswers(){
    return _.shuffle([
        this._correctAnswer,...this._incorrectAnswers
    ])
}

judgeCorrectAnswer(answer){
 return answer === this._correctAnswer
}

static async fetchAndCreateQuizzes(){
    const quizDataList = await QuizFetcher.fetch();

    return quizDataList.results.map(result =>{
        return {
            question :he.decode(result.question),
            correctAnswer:he.decode(result.correct_answer),
            incorrectAnswers:result.incorrect_answers.map(str=> he.decode(str))
        }
    })

    .map(quizData =>{
        return new Quiz(quizData)
    })
}

}

export default Quiz;