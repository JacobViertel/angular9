import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oneConversion';

  firstname ="";

  subTitle= "Its fun to learn Interpolation";
  epNum = 17;

  clsName = 'one';
  clsName2 = 'two';

  showMsg = false;
  colorname = "green";

  colorVal = "blue";
  bgVal = '#ddd';

  switchValue = 5;

  user = {
    userId: 10, 
    firstName: 'john',
    status: 'Active'
  };

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

  placeholderVal= "Enter value";
  hrefVal = "http://google.com";
  updatedLink= "http://oracle.com";

  showAlert(id){
    alert("Hello From ARC Tuts "+id);
  }

  consoleLog(){
    console.log('hello from input focus');
  }

  readFirstname(){
    console.log(this.firstname);
  }
  
}
