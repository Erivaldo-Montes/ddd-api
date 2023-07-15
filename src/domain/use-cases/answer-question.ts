import { Answer } from "../entities/answer"
import { UniqueEntityId } from "../object-value/unque-entity-id"
import { answerRepository } from "../repositories/answer-repository"

interface AnswerQuestionUseCaseRequest{
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(private answerRepository: answerRepository){}

  async execute({instructorId, questionId, content}: AnswerQuestionUseCaseRequest){
    const answer =  Answer.create({
      content,
      questionId: new UniqueEntityId(questionId),
      authorId: new UniqueEntityId(instructorId)
    })

    await this.answerRepository.create(answer)

    return answer
  }
}


