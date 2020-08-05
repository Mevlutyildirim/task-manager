import { Entity, Column, PrimaryColumn, CreateDateColumn} from 'typeorm';

@Entity()
class Team{

  @PrimaryColumn()
  id:number;

  @Column()
  name:string;

  @CreateDateColumn()
  createdAt: Date;
}

export default Team;