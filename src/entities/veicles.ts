import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class veicleTable {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  plate: string;

  @Column()
  chassis: string;

  @Column({ length: 11 })
  renavam: number;

  @Column()
  model: string;

  @Column()
  brand: string;

  @Column({ type: "date" })
  year: String;
}
