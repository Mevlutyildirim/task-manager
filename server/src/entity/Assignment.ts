import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import {Task, User} from '.'
@Entity()
class Assignment{

  @PrimaryColumn()
  id:number;

  @OneToOne(
    ()=> Task,
    task => task.id
  )
  taskId: Task

  @OneToOne(type => User, user => user.id)
  userId: User

}

export default Assignment;