import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "../common/common.entity";


@Entity()
export class Room extends CommonEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    roomNumber: string;

    @Column()
    available: boolean;

}