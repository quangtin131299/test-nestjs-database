import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Phim } from "./Phim";
import { Loaiphim } from "./Loaiphim";

@Index("ID_Loai", ["idLoai"], {})
@Entity("phim_loaiphim", { schema: "datvephim" })
export class PhimLoaiphim {
  @Column("int", { primary: true, name: "ID_Phim" })
  idPhim: number;

  @Column("int", { primary: true, name: "ID_Loai" })
  idLoai: number;

  @Column("varchar", { name: "MoTa", length: 500 })
  moTa: string;

  @Column("date", { name: "NgayKhoiChieu" })
  ngayKhoiChieu: string;

  @ManyToOne(() => Phim, (phim) => phim.phimLoaiphims, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "ID_Phim", referencedColumnName: "id" }])
  idPhim2: Phim;

  @ManyToOne(() => Loaiphim, (loaiphim) => loaiphim.phimLoaiphims, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "ID_Loai", referencedColumnName: "id" }])
  idLoai2: Loaiphim;
}
