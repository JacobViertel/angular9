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
    {userId: 10, firstName: 'john'},
    {userId: 20, firstName: 'marc'},
    {userId: 30, firstName: 'dave'},
    {userId: 40, firstName: 'jenny'},
    {userId: 50, firstName: 'steve'},
    {userId: 60, firstName: 'kai'}
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
