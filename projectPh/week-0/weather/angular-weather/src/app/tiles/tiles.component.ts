import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  show1 = true;
  constructor(){}
hide(){
this.show1 = false
}
  ngOnInit() {
  }

}
