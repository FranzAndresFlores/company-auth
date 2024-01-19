import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DBLength } from "src/company-common/configs/db.length";
import { Account } from "src/admin/account/entities/account.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    idUser: number;

    @Column('varchar', { length: DBLength.name, comment: 'Nombre del usuario' })
    firstName: string;

    @Column('varchar', { length: DBLength.name, comment: 'Apellido del usuario' })
    lastName: string;

    @Column('varchar', { length: DBLength.dni, comment: 'Cédula del usuario' })
    dni: string;

    @Column({ type: 'int', nullable: true, precision: 2, unsigned: true })
    age: number;

    @Column({ type: 'boolean', default: true })
    isActive: boolean;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    @OneToOne(() => Account, (account: Account) => account.user, { cascade: true })
    @JoinColumn({ name: 'idAccount' })
    account: Account;
}
