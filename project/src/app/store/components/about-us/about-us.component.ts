import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  footerEmail;

  constructor() { }

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
  }
  sendEmail() {
    if (this.footerEmail) {
      console.log(this.footerEmail);
    }
  }
}
