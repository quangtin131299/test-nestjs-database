import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Ghe } from "./Ghe";
import { Phong } from "./Phong";
import { Suatchieu } from "./Suatchieu";

@Index("ID_Phong", ["idPhong"], {})
@Index("ID_suatchieu", ["idSuatchieu"], {})
@Entity("ghe_phong", { schema: "datvephim" })
export class GhePhong {
  @Column("int", { primary: true, name: "ID_Ghe" })
  idGhe: number;

  @Column("int", { primary: true, name: "ID_Phong" })
  idPhong: number;

  @Column("int", { primary: true, name: "ID_suatchieu", default: () => "'1'" })
  idSuatchieu: number;

  @Column("varchar", {
    name: "TrangThai",
    length: 200,
    default: () => "'Trống'",
  })
  trangThai: string;

  @Column("date", { primary: true, name: "NgayDat" })
  ngayDat: string;

  @ManyToOne(() => Ghe, (ghe) => ghe.ghePhongs, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "ID_Ghe", referencedColumnName: "id" }])
  idGhe2: Ghe;

  @ManyToOne(() => Phong, (phong) => phong.ghePhongs, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "ID_Phong", referencedColumnName: "id" }])
  idPhong2: Phong;

  @ManyToOne(() => Suatchieu, (suatchieu) => suatchieu.ghePhongs, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "ID_suatchieu", referencedColumnName: "id" }])
  idSuatchieu2: Suatchieu;
}
