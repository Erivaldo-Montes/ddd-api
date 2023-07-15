import { Optional } from "@/core/@types/optional"
import { Entity } from "@/core/entities/entity"
import { UniqueEntityId } from "../object-value/unque-entity-id"

interface AnswerProps {
  authorId: UniqueEntityId, 
  questionId: UniqueEntityId,
  content: string, 
  createAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  get content(){
    return this.props.content
  }
  get authorId(){
    return this.props.authorId
  }
  get questionId(){
    return this.props.questionId
  }
  get updatedAt(){
    return this.props.updatedAt
  }
  
  get excerpt (){
    return this.content.substring(0,120).trimEnd().concat('...')
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  set content(content: string){
    this.props.content = content
    this.touch()
  }
  static create(props: Optional<AnswerProps, 'createAt'>, id?: UniqueEntityId) {
    const answer = new Answer({
      ...props,
      createAt: new Date()
    }, id)

    return answer
  }
}