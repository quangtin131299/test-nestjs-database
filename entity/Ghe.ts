import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { GhePhong } from "./GhePhong";
import { Vedat } from "./Vedat";

@Entity("ghe", { schema: "datvephim" })
export class Ghe {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "TenGhe", length: 200 })
  tenGhe: string;

  @OneToMany(() => GhePhong, (ghePhong) => ghePhong.idGhe2)
  ghePhongs: GhePhong[];

  @OneToMany(() => Vedat, (vedat) => vedat.idGhe2)
  vedats: Vedat[];
}
