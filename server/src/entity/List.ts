import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
class List{

  @PrimaryColumn()
  id:number;

}

export default List;