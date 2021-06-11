import {Entity,Column,PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Image from './Image'

@Entity('bloodCenters')
export default class BloodCenter{
    @PrimaryGeneratedColumn('increment')
    id:number;
    @Column()
    name:string;
    @Column()
    latitude:number;
    @Column()
    longitude: number;
    @Column()
    about:string;
    @Column()
    instructions:string;
    @Column()
    opening_hours:string;
    @Column()
    open_on_weekends:boolean;

    @OneToMany(() => Image, (image) => image.bloodCenter, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'bloodCenter_id' })
    images: Image[]
}