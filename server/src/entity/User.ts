import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    userName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    avatar: string;
}

export default User;

