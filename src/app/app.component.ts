import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oneConversion';

  showMsg = false;
  colorname = "green";

  switchValue = 5;

  users = [
    {id: 1, name: 'john'},
    {id: 2, name: 'john'},
  ];

  readMe(){
    console.log('button clicked');
    if(this.showMsg){
      this.showMsg = false;
    }
    else{
      this.showMsg = true;
    }
  }

}
