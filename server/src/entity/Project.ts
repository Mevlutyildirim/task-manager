import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
class Project{

  @PrimaryColumn()
  id:number;
  
}

export default Project;