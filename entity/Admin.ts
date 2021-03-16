import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("admin", { schema: "datvephim" })
export class Admin {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "HoTen", length: 100 })
  hoTen: string;

  @Column("varchar", { name: "Acount", length: 100 })
  acount: string;

  @Column("varchar", { name: "Password", length: 100 })
  password: string;
}
