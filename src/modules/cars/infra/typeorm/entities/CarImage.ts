import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("car_image")
class CarImage {
  @PrimaryColumn()
  id: string;

  @Column()
  car_id: string;

  @Column()
  name_image: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id === uuidv4();
    }
  }
}

export { CarImage };
