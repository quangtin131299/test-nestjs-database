import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Lichchieu } from "./Lichchieu";
import { Phong } from "./Phong";
import { Vedat } from "./Vedat";

@Entity("rapphim", { schema: "datvephim" })
export class Rapphim {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "TenRap", length: 200 })
  tenRap: string;

  @Column("varchar", { name: "Hinh", length: 200 })
  hinh: string;

  @Column("varchar", { name: "DiaChi", length: 200 })
  diaChi: string;

  @OneToMany(() => Lichchieu, (lichchieu) => lichchieu.idRap2)
  lichchieus: Lichchieu[];

  @ManyToMany(() => Phong, (phong) => phong.rapphims)
  phongs: Phong[];

  @OneToMany(() => Vedat, (vedat) => vedat.idRap2)
  vedats: Vedat[];
}
