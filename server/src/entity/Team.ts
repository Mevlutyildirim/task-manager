import { Entity, Column, PrimaryColumn, CreateDateColumn} from 'typeorm';

@Entity()
class Team{

  @PrimaryColumn()
  id:number;

  @CreateDateColumn()
  createdAt: Date;
}

export default Team;