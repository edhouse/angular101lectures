import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  chosen:string = "simple"

  onRadio(val:string){
    this.chosen = val;
  }

}
