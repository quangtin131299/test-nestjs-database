import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { GhePhong } from "./GhePhong";
import { PhimPhongXuat } from "./PhimPhongXuat";
import { Lichchieu } from "./Lichchieu";
import { Rapphim } from "./Rapphim";
import { Vedat } from "./Vedat";

@Entity("phong", { schema: "datvephim" })
export class Phong {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "TenPhong", length: 200 })
  tenPhong: string;

  @OneToMany(() => GhePhong, (ghePhong) => ghePhong.idPhong2)
  ghePhongs: GhePhong[];

  @OneToMany(() => PhimPhongXuat, (phimPhongXuat) => phimPhongXuat.idPhong2)
  phimPhongXuats: PhimPhongXuat[];

  @ManyToMany(() => Lichchieu, (lichchieu) => lichchieu.phongs)
  @JoinTable({
    name: "phong_lichchieu",
    joinColumns: [{ name: "ID_Phong", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "ID_LichChieu", referencedColumnName: "id" }],
    schema: "datvephim",
  })
  lichchieus: Lichchieu[];

  @ManyToMany(() => Rapphim, (rapphim) => rapphim.phongs)
  @JoinTable({
    name: "phong_rap",
    joinColumns: [{ name: "ID_Phong", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "ID_Rap", referencedColumnName: "id" }],
    schema: "datvephim",
  })
  rapphims: Rapphim[];

  @OneToMany(() => Vedat, (vedat) => vedat.idPhong2)
  vedats: Vedat[];
}
