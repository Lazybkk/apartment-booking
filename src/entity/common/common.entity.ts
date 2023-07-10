import { BaseEntity, Column, Entity } from "typeorm";


@Entity()
export class CommonEntity extends BaseEntity{
    @Column({ type: 'timestamp' })
    createdAt: Date;

    @Column({ type: 'timestamp' })
    updatedAt: Date;
}