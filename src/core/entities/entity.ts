import { UniqueEntityId } from "../../domain/object-value/unque-entity-id"

export class Entity<Props> {
  private _id: UniqueEntityId
  protected props: Props

  get id(){
    return this._id
  }


  // só pode chamado pelas classes que herdam
  protected constructor(props: Props, id?: UniqueEntityId){
    this.props = props
    this._id = id ?? new UniqueEntityId()
  }
}