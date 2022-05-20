import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class veicleTable {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  plate: string;

  @Column({ length: 17 })
  chassis: string;

  @Column()
  renavam: number;

  @Column()
  model: string;

  @Column()
  brand: string;

  @Column({ type: "date" })
  year: string;
}
