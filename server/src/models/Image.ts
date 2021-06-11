import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import BloodCenter from './BloodCenter'

@Entity('images')
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    path: string

    @ManyToOne(() => BloodCenter, (bloodCenter )=> bloodCenter.images)
    @JoinColumn({ name: 'bloodCenter_id' })
    bloodCenter: BloodCenter
}
