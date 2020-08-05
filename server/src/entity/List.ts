import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import {Project} from '.';
@Entity()
class List{

  @PrimaryColumn()
  id:number;

  @ManyToOne(type=> Project, project => project.id)
  project:Project

}

export default List;