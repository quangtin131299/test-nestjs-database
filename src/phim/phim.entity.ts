import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('phim', { schema: 'datvephim' })
export class Phim {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'TenPhim', length: 200 })
  tenPhim: string;

  @Column('varchar', { name: 'Hinh', length: 200 })
  hinh: string;

  @Column('varchar', { name: 'TrangThai', length: 200 })
  trangThai: string;

  @Column('int', { name: 'ThoiGian' })
  thoiGian: number;

  @Column('varchar', { name: 'Trailer', length: 50 })
  trailer: string;
}
