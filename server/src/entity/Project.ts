import { Entity, Column, PrimaryColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import {Team} from '.';
@Entity()
class Project{

  @PrimaryColumn()
  id:number;

  @ManyToOne(type=>Team, team=> team.id)
  team:Team

  @CreateDateColumn()
  createdAt:Date;

  @Column()
  color:string;
}

export default Project;