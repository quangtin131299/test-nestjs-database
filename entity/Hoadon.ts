import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Khachhang } from "./Khachhang";
import { Vedat } from "./Vedat";

@Index("ID_KhachHang", ["idKhachHang"], {})
@Entity("hoadon", { schema: "datvephim" })
export class Hoadon {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("date", { name: "Ngày" })
  ngY: string;

  @Column("int", { name: "ThanhTien" })
  thanhTien: number;

  @Column("int", { name: "ID_KhachHang" })
  idKhachHang: number;

  @Column("varchar", {
    name: "TrangThai",
    length: 250,
    default: () => "'Chưa thanh toán'",
  })
  trangThai: string;

  @ManyToOne(() => Khachhang, (khachhang) => khachhang.hoadons, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "ID_KhachHang", referencedColumnName: "id" }])
  idKhachHang2: Khachhang;

  @OneToMany(() => Vedat, (vedat) => vedat.idHoaDon2)
  vedats: Vedat[];
}
