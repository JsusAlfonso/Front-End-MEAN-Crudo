import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ConfigurationValues } from './configurationValues';

@Injectable()
export class ApiService{
  constructor(
      private httpClient:HttpClient,
      private configurationValues:ConfigurationValues){}

     /* public postAddUser(modelUserAdmin){
        return new Promise(resolve => {
          console.log(JSON.stringify(modelUserAdmin));
            this.httpClient.post(this.configurationValues.strUrlApis+'registerUser', modelUserAdmin)
            .subscribe(data => {
              resolve(data);
            }, err => {
              console.log(err);
            });
          });
      }*/

      public getUser(){
        // console.log('entro al api');
        return new Promise(resolve => {
          this.httpClient.get(this.configurationValues.strUrlApis+"getUser/"+"jesusalfonsoc.rdz@hotmail.com"+"/"+"123456")
          .subscribe(data => {
            // console.log('-----------');
            // console.log(data);
            // console.log('-----------');
            resolve(data['jsnAnswer']);
          }, err => {
            console.log(err);
          });
        });
      }


    
}
