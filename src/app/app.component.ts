import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  name: string = 'Bob';

  // constructor() {
  //   this.changeName("Dipo");
  // }

  // changeName = (name: string = 'Alice'): void => {
  //   this.name = name;
  // };
}
