import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Rapphim } from "./Rapphim";
import { Phim } from "./Phim";
import { Phong } from "./Phong";
import { Suatchieu } from "./Suatchieu";

@Index("ID_Rap", ["idRap"], {})
@Entity("lichchieu", { schema: "datvephim" })
export class Lichchieu {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("date", { name: "Ngay" })
  ngay: string;

  @Column("int", { name: "ID_Rap" })
  idRap: number;

  @ManyToOne(() => Rapphim, (rapphim) => rapphim.lichchieus, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "ID_Rap", referencedColumnName: "id" }])
  idRap2: Rapphim;

  @ManyToMany(() => Phim, (phim) => phim.lichchieus)
  @JoinTable({
    name: "phim_lichchieu",
    joinColumns: [{ name: "ID_LichChieu", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "ID_Phim", referencedColumnName: "id" }],
    schema: "datvephim",
  })
  phims: Phim[];

  @ManyToMany(() => Phong, (phong) => phong.lichchieus)
  phongs: Phong[];

  @OneToMany(() => Suatchieu, (suatchieu) => suatchieu.idLichChieu2)
  suatchieus: Suatchieu[];
}
