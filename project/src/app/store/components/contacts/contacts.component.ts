import { Component, OnInit, AfterViewInit } from '@angular/core';
import { show, bounceAnim } from 'src/app/app.animations';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: [bounceAnim]
})
export class ContactsComponent implements OnInit, AfterViewInit {
  center: google.maps.LatLngLiteral;
  footerEmail;


  constructor() { }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  sendEmail() {
    if (this.footerEmail) {
      console.log(this.footerEmail);
      this.footerEmail = '';
    }
  }

}
