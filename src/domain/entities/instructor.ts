import { Entity } from "@/core/entities/entity"
import { UniqueEntityId } from "../object-value/unque-entity-id"


interface InstructorProps {
  name: string
}

export class Instructor extends Entity<InstructorProps> {
  static create(props: InstructorProps, id?: UniqueEntityId) {
    const question = new Instructor(props, id)

    return question
  }
}