import { Entity } from "../../core/entities/entity"

interface QuestionProps {
  title: string
  content: string
  authorId: string

}

export class Question extends Entity<QuestionProps> {}