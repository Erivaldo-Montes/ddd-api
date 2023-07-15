import { Optional } from "@/core/@types/optional"
import { Entity } from "@/core/entities/entity"
import { Slug } from "../object-value/slug"
import { UniqueEntityId } from "../object-value/unque-entity-id"
import dayjs from 'dayjs'

interface QuestionProps {
  authorId: UniqueEntityId
  bestAnswerId?: UniqueEntityId
  title: string
  content: string
  slug: Slug
  createAt: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {
  get bestAnswerId(){
    return this.props.bestAnswerId
  }
  get authorId(){
    return this.props.authorId
  }
  get title(){
    return this.props.title
  }
  get updatedAt(){
    return this.props.updatedAt
  }
  get content(){
    return this.props.content
  }
  get slug(){
    return this.props.slug
  }

  get createdAt(){
    return this.props.createAt
  }

  get isNew(): boolean{
    return dayjs().diff(this.createdAt, 'days') <= 3
  }

  get excerpt (){
    return this.content.substring(0,120).trimEnd().concat('...')
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  set bestAnswerId(bestAnswerId: UniqueEntityId | undefined){
    this.props.bestAnswerId = bestAnswerId
  }

  set content(content: string){
    this.props.content = content
    this.touch()
  }
  set title(title: string){
    this.props.title = title
    this.props.slug = Slug.createFromText(title)
    this.touch()
  }

  static create(props: Optional<QuestionProps, 'createAt' | 'slug'>, id?: UniqueEntityId) {
    const question = new Question({
        ...props,
        slug: props.slug ?? Slug.createFromText(props.title),
        createAt: new Date()
      }, id
    )


    return question
  }

}