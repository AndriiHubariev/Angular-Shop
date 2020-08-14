import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthComponent, Person } from '../auth/auth.component';
import { Router } from '@angular/router';
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submited = false;

  constructor(public auth: AuthComponent, private router: Router){}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  submit() {
    this.submited = true;
    if (this.form.invalid) {
      return;
    }
    const person: Person = {
      email: this.form.value.email,
      password: this.form.value.password
    };
    this.auth.login(person).subscribe( () => {
    this.router.navigate(['/admin/main/products']);
    });
    this.submited = false;
  }
}
