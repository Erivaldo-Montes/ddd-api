import { Entity } from "@/core/entities/entity"
import { UniqueEntityId } from "../object-value/unque-entity-id"

interface StudentProps {
  name: string
}

export class Student extends Entity<StudentProps> {
  static create(props: StudentProps, id?: UniqueEntityId) {
    const question = new Student(props, id)

    return question
  }
}