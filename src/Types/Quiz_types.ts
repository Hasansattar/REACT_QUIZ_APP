import react from 'react'



export type QuestionType= {
    category: string
    difficulty: string
    question: string
    correct_answer: string
    incorrect_answers: string[]
    type: string

}


export type QuizType= {
    question: string
    answer: string
    option: string[]
    correct_answer: string
}

export type questionPropsType = {
    questions: string
    options: string[]
    callback: (e: React.FormEvent<EventTarget>, ans:string) => void
}