import { Component, OnInit } from '@angular/core';
import { ApiService } from '../helpers/serverApi';
import { ConfigurationValues } from '../helpers/configurationValues';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService,ConfigurationValues]
})
export class AppComponent{
  title = 'ejemploApis';
  constructor(private apiConnection: ApiService) {}

  fnGetUser(){
    console.log(this.apiConnection);
    console.log('..................................');
    console.log('llego');
    this.apiConnection.getUser()
    .then((data:object) => {
        console.log(data);
    });
  }
  
}
