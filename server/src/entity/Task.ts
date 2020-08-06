import {Entity, Column, PrimaryColumn,  ManyToOne, CreateDateColumn} from 'typeorm';
import {List} from '.'
@Entity()
class Task{

  @PrimaryColumn()
  id:number;

  @ManyToOne(
    ()=> List,
    list => list.id
  )
  list: List;

  @CreateDateColumn()
  createdAt:Date;

  @Column()
  state:Boolean;

  @Column()
  order:number;

}

export default Task;