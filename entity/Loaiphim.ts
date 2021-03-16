import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PhimLoaiphim } from "./PhimLoaiphim";

@Entity("loaiphim", { schema: "datvephim" })
export class Loaiphim {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "TenLoai", length: 200 })
  tenLoai: string;

  @OneToMany(() => PhimLoaiphim, (phimLoaiphim) => phimLoaiphim.idLoai2)
  phimLoaiphims: PhimLoaiphim[];
}
