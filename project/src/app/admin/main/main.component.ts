import { Component, OnInit } from '@angular/core';
import { menuAnimation } from 'src/app/app.animations';
import { AuthComponent } from '../auth/auth.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [menuAnimation]
})
export class MainComponent implements OnInit {
  menuToggle = false;

  constructor(private auth: AuthComponent, private router: Router) {}

  showMenu() {
    if (this.menuToggle) {
      this.menuToggle = false;
    } else {
      this.menuToggle = true;
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['admin', 'login']);
  }

  ngOnInit(): void {
  }

}
