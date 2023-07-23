import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Mosque } from './Mosque.entity';

@Entity()
export class BookingMosque {
  @PrimaryGeneratedColumn("identity")
  MBookingId: number;
 

 
  @Column()
  BookingTime: String;
  @Column() 
  BookingDate: String;
  @Column()
  BoookingDuration: String; 
  @Column() 
  Bookedby: String;


  @Column()
  BookingStatus: string;

  @Column()
  BookingType: string;


}
