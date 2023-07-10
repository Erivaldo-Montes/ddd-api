import { randomUUID } from "crypto"
import { Slug } from "../object-value/slug"
import { Entity } from "../../core/entities/entity"

interface AnswerProps {
  content: string, 
  authorId: string, 
  questionId: string,
  slug: Slug
}

export class Answer extends Entity<AnswerProps> {

  get content(){
    return this.props.content
  }
}