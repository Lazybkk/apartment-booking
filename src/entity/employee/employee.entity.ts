import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { CommonEntity } from "../common/common.entity";

@Entity()
export class Employee extends CommonEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    password: string;

    @Column()
    email: string;

}