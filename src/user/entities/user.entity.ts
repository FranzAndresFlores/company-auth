import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30 })
    firstname: string;

    @Column('varchar', { length: 50, comment: 'Apellido del usuario' })
    lastname: string;

    @Column({ type: 'int', nullable: true, precision: 2, unsigned: true })
    age: number;

    @Column({ type: 'boolean', default: true })
    isActive: boolean;
}
