import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { GhePhong } from "./GhePhong";
import { PhimPhongXuat } from "./PhimPhongXuat";
import { Lichchieu } from "./Lichchieu";
import { Vedat } from "./Vedat";

@Index("ID_LichChieu", ["idLichChieu"], {})
@Entity("suatchieu", { schema: "datvephim" })
export class Suatchieu {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("time", { name: "Gio" })
  gio: string;

  @Column("int", { name: "ID_LichChieu" })
  idLichChieu: number;

  @OneToMany(() => GhePhong, (ghePhong) => ghePhong.idSuatchieu2)
  ghePhongs: GhePhong[];

  @OneToMany(() => PhimPhongXuat, (phimPhongXuat) => phimPhongXuat.idXuatChieu2)
  phimPhongXuats: PhimPhongXuat[];

  @ManyToOne(() => Lichchieu, (lichchieu) => lichchieu.suatchieus, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "ID_LichChieu", referencedColumnName: "id" }])
  idLichChieu2: Lichchieu;

  @OneToMany(() => Vedat, (vedat) => vedat.idSuat2)
  vedats: Vedat[];
}
