import { User } from "src/admin/user/entities/user.entity";
import { DBLength } from "src/company-common/configs/db.length";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    idAccount: number;

    @Column('varchar', { length: DBLength.name, unique: true, nullable: true })
    email: string;

    @Column('varchar', { length: DBLength.password, nullable: true })
    password: string;
    
    @Column({ type: 'boolean', default: true })
    isActive: boolean;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    @OneToOne(() => User, (user: User) => user.account)
    user: User;
}
