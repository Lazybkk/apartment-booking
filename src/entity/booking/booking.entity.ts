import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "../common/common.entity";
import { Employee } from "../employee/employee.entity";
import { Customer } from "../customer/customer.entity";
import { Room } from "../room/room.entity";

export enum Status {
    CANCELED = 'CANCELED',
    CONFIRMED = 'CONFIRMED',
    ON_HOLD = 'ON_HOLD'

}

@Entity()
export class Booking extends CommonEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    start_date: Date

    @Column()
    end_date: Date

    @Column()
    receptionist: Employee
    
    @Column()
    customer: Customer

    @Column()
    room: Room

    @Column()
    status: Status

}