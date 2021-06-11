import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('users')
export default class User{
    @PrimaryGeneratedColumn('increment')
    id:number;
    @Column()
    name:string;
    @Column()
    cpf:string;
    @Column()
    bloodType:String;
    @Column()
    telephone: String;
    @Column()
    city:string;
    @Column()
    state:string;



}