import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Phim } from "./Phim";
import { Phong } from "./Phong";
import { Suatchieu } from "./Suatchieu";

@Index("ID_Phong", ["idPhong"], {})
@Index("ID_XuatChieu", ["idXuatChieu"], {})
@Entity("phim_phong_xuat", { schema: "datvephim" })
export class PhimPhongXuat {
  @Column("int", { primary: true, name: "ID_Phim" })
  idPhim: number;

  @Column("int", { primary: true, name: "ID_Phong" })
  idPhong: number;

  @Column("int", { primary: true, name: "ID_XuatChieu" })
  idXuatChieu: number;

  @Column("date", { primary: true, name: "Ngay" })
  ngay: string;

  @ManyToOne(() => Phim, (phim) => phim.phimPhongXuats, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "ID_Phim", referencedColumnName: "id" }])
  idPhim2: Phim;

  @ManyToOne(() => Phong, (phong) => phong.phimPhongXuats, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "ID_Phong", referencedColumnName: "id" }])
  idPhong2: Phong;

  @ManyToOne(() => Suatchieu, (suatchieu) => suatchieu.phimPhongXuats, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "ID_XuatChieu", referencedColumnName: "id" }])
  idXuatChieu2: Suatchieu;
}
