import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Lichchieu } from "./Lichchieu";
import { PhimLoaiphim } from "./PhimLoaiphim";
import { PhimPhongXuat } from "./PhimPhongXuat";
import { Vedat } from "./Vedat";

@Entity("phim", { schema: "datvephim" })
export class Phim {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "TenPhim", length: 200 })
  tenPhim: string;

  @Column("varchar", { name: "Hinh", length: 200 })
  hinh: string;

  @Column("varchar", { name: "TrangThai", length: 200 })
  trangThai: string;

  @Column("int", { name: "ThoiGian" })
  thoiGian: number;

  @Column("varchar", { name: "Trailer", length: 50 })
  trailer: string;

  @ManyToMany(() => Lichchieu, (lichchieu) => lichchieu.phims)
  lichchieus: Lichchieu[];

  @OneToMany(() => PhimLoaiphim, (phimLoaiphim) => phimLoaiphim.idPhim2)
  phimLoaiphims: PhimLoaiphim[];

  @OneToMany(() => PhimPhongXuat, (phimPhongXuat) => phimPhongXuat.idPhim2)
  phimPhongXuats: PhimPhongXuat[];

  @OneToMany(() => Vedat, (vedat) => vedat.idPhim2)
  vedats: Vedat[];
}
