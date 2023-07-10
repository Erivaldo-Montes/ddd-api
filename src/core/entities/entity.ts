import { UniqueEntityId } from "../../domain/object-value/unque-entity-id"

export class Entity<Props> {
  private _id: UniqueEntityId
  protected props: Props

  get id(){
    return this._id
  }

  constructor(props: Props, id?: string){
    this.props = props
    this._id = new UniqueEntityId(id)
  }
}