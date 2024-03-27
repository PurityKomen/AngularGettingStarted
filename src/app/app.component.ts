import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  name = 'Martha';
  hideParagraph = false;

  paragraph = 'Welcome to Angular';

  toggle(){
    this.hideParagraph = !this.hideParagraph;
  };


  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }


  roomList: RoomList[] = [
    {
      roomType: 'Single',
      amenities: 'Air conditioner,Free Wi-fi,Bathroom,Kitchen',
      price: 5000,
      checkinTime: new Date('11-Jan-2024'),
      checkoutTime: new Date('20-Jan-2024')
    },

    {
      roomType: '2Bd',
      amenities: 'Air conditioner,Free Wi-fi,Bathroom,Kitchen,Balcony',
      price: 10000,
      checkinTime: new Date('15-Jan-2024'),
      checkoutTime: new Date('26-Jan-2024') 
    }
  ]
}
