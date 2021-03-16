import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Hoadon } from "./Hoadon";
import { Vedat } from "./Vedat";

@Index("Account", ["account"], { unique: true })
@Entity("khachhang", { schema: "datvephim" })
export class Khachhang {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "HoTen", length: 200 })
  hoTen: string;

  @Column("varchar", { name: "Email", length: 200 })
  email: string;

  @Column("date", { name: "NgaySinh" })
  ngaySinh: string;

  @Column("varchar", { name: "SDT", length: 200 })
  sdt: string;

  @Column("varchar", { name: "Account", unique: true, length: 200 })
  account: string;

  @Column("varchar", { name: "Password", length: 200 })
  password: string;

  @OneToMany(() => Hoadon, (hoadon) => hoadon.idKhachHang2)
  hoadons: Hoadon[];

  @OneToMany(() => Vedat, (vedat) => vedat.idKhachHang2)
  vedats: Vedat[];
}
