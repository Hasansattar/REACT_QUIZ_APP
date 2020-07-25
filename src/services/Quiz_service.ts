import { QuestionType, QuizType } from './../Types/Quiz_types'


//shufflrarray option ko shufflr krne k leya use kia gaya ha
const shuffleArray = (array: any[]) =>
[...array].sort(() => Math.random() - 0.5)



//yahan sy api to get kia ha
export const getQuizData = async (totalQuestions: number, level: string): Promise<QuizType[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`)
    let { results } = await res.json();
    // return results;
    //console.log(results);

    const quiz: QuizType[] = results.map((questionObj: QuestionType) => {

        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            correct_answer: questionObj.correct_answer,
            option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }

    })
    
    return quiz;

} 