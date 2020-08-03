import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
class Member{

  @PrimaryColumn()
  id:number;

}

export default Member;