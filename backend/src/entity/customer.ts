import { Column, Entity, ObjectIdColumn } from "typeorm";

interface Usina {
    usinaId: number;
    percentualDeParticipacao: number;
}

@Entity()
export class Customer {
    @ObjectIdColumn()
    id!: string;

    @Column()
    numeroCliente!: string;

    @Column()
    nomeCliente!: string;

    @Column()
    usinas!: Array<Usina>;
}