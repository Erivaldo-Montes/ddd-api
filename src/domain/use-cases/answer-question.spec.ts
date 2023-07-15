import {describe, expect, test} from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { answerRepository } from '../repositories/answer-repository'
import { Answer } from '../entities/answer'

const fakeAnswerRepository: answerRepository = {
  create: async (answer: Answer) => {
    return
  }
}

test('create a answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

  const answer = await answerQuestion.execute({
    content: 'resposta', 
    instructorId: '1', 
    questionId: '1'
  })

  expect(answer.content).toEqual('resposta')
})