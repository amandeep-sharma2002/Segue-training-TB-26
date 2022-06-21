import { Component,   } from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from './User.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;

  onFormSubmit(userForm:NgForm){
      let nameVal = userForm.value.name;
      let usernameVal = userForm.value.username;
      let passwordVal = userForm.value.password;
      this.user={
        name: nameVal,
        username: usernameVal,
        password: passwordVal
      }
      console.log(this.user);
  }
}
