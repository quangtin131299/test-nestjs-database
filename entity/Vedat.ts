import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ghe } from "./Ghe";
import { Phim } from "./Phim";
import { Khachhang } from "./Khachhang";
import { Rapphim } from "./Rapphim";
import { Suatchieu } from "./Suatchieu";
import { Hoadon } from "./Hoadon";
import { Phong } from "./Phong";

@Index("ID_Ghe", ["idGhe"], {})
@Index("ID_Phim", ["idPhim"], {})
@Index("ID_KhachHang", ["idKhachHang"], {})
@Index("ID_Rap", ["idRap"], {})
@Index("ID_Suat", ["idSuat"], {})
@Index("ID_HoaDon", ["idHoaDon"], {})
@Index("ID_Phong", ["idPhong"], {})
@Entity("vedat", { schema: "datvephim" })
export class Vedat {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("date", { name: "NgayDat" })
  ngayDat: string;

  @Column("int", { name: "ID_Suat" })
  idSuat: number;

  @Column("int", { name: "ID_Ghe" })
  idGhe: number;

  @Column("int", { name: "ID_Phim" })
  idPhim: number;

  @Column("int", { name: "ID_KhachHang" })
  idKhachHang: number;

  @Column("int", { name: "ID_Rap" })
  idRap: number;

  @Column("int", { name: "ID_HoaDon" })
  idHoaDon: number;

  @Column("varchar", { name: "Status", length: 200 })
  status: string;

  @Column("int", { name: "ID_Phong" })
  idPhong: number;

  @ManyToOne(() => Ghe, (ghe) => ghe.vedats, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "ID_Ghe", referencedColumnName: "id" }])
  idGhe2: Ghe;

  @ManyToOne(() => Phim, (phim) => phim.vedats, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "ID_Phim", referencedColumnName: "id" }])
  idPhim2: Phim;

  @ManyToOne(() => Khachhang, (khachhang) => khachhang.vedats, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "ID_KhachHang", referencedColumnName: "id" }])
  idKhachHang2: Khachhang;

  @ManyToOne(() => Rapphim, (rapphim) => rapphim.vedats, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "ID_Rap", referencedColumnName: "id" }])
  idRap2: Rapphim;

  @ManyToOne(() => Suatchieu, (suatchieu) => suatchieu.vedats, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "ID_Suat", referencedColumnName: "id" }])
  idSuat2: Suatchieu;

  @ManyToOne(() => Hoadon, (hoadon) => hoadon.vedats, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "ID_HoaDon", referencedColumnName: "id" }])
  idHoaDon2: Hoadon;

  @ManyToOne(() => Phong, (phong) => phong.vedats, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "ID_Phong", referencedColumnName: "id" }])
  idPhong2: Phong;
}
