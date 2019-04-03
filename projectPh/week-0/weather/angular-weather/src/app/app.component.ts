import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather forecast';
  show1 = true;
  constructor(){}
hide(){
this.show1 = false
}
}

  