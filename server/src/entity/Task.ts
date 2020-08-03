import {Entity, Column, PrimaryColumn, OneToMany} from 'typeorm';
import {List} from '.'
@Entity()
class Task{

  @PrimaryColumn()
  id:number;

  @OneToMany(
    ()=> List,
    list => list.id
  )
}

export default Task;