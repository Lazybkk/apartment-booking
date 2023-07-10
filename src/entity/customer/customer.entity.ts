import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "../common/common.entity";

@Entity()
export class Customer extends CommonEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    phoneNumber: boolean;

    @Column()
    nationalID: string;
    

}