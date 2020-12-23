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
