import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userr = 'defunkt';

  getuser(user:any) {
    this.userr=user.target.value;
  }
}
