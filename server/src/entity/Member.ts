import { Entity, Column, PrimaryColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import {User, Team} from '.'

@Entity()
class Member{

  @PrimaryColumn()
  id:number;

  

  @ManyToOne(type => Team, team=>team.id)
  team:Team

  @CreateDateColumn()
  addedAt:Date

  @Column()
  role:string;
}

export default Member;