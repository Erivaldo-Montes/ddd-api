import { Answer } from "../entities/answer";

export interface answerRepository {
  create(answer: Answer): Promise<void>
}