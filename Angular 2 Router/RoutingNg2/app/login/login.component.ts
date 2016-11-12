import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'login',
    styles: ['h3 { text-align: center; }', 'div { padding: 5px; }', 'button { padding: 10px 20px; background: green; color: white; font-weight: bold;}'],
    template: `<h3>
                <div>Username: <input type="text" [(ngModel)]="username"></div>
                <div>Password: <input type="password" [(ngModel)]="password"></div>
                <div><button (click)="validateLogin()">Log In</button></div>
                <h4 *ngIf="isCredentialsInValid">Invalid Credentials. Please try again.</h4>
               </h3>`
})
export class LoginComponent { 
    username: string;
    password: string;
    isCredentialsInValid: boolean;
    constructor(private route: ActivatedRoute, private router: Router) {};
    validateLogin(){
        if(this.username === this.password){
            localStorage.setItem("isLoggedIn", "true");
            this.router.navigate(['../dashboard'], { relativeTo: this.route });
        } else {
            this.isCredentialsInValid = true;
        }
    };
}
