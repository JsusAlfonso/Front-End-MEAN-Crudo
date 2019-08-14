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
        console.log('entro al api');
        return new Promise(resolve => {
          this.httpClient.get(this.configurationValues.strUrlApis+"getUser/"+"jesusalfonsoc.rdz@hotmail.com"+"/"+"123456")
          .subscribe(data => {
            console.log('-----------');
            console.log(data);
            console.log('-----------');
            resolve(data['jsnAnswer']);
          }, err => {
            console.log(err);
          });
        });
      }


    
}
/*
@Injectable()
export class ApiService{
    constructor(
        private httpClient:HttpClient,
        private configurationValues:ConfigurationValues){}

    public postAddAdminUser(modelUserAdmin){
        return new Promise(resolve => {
          console.log(JSON.stringify(modelUserAdmin));
            this.httpClient.post(this.configurationValues.strUrlApis+'admin', modelUserAdmin)
            .subscribe(data => {
              resolve(data);
            }, err => {
              console.log(err);
            });
          });
    }

    public putUpdateTechnician(technician){
      console.log("Entro a server apis, el json es:",JSON.stringify(technician,null,2));
      return new Promise(resolve => {
        //console.log(JSON.stringify(modelUserManager));
          this.httpClient.put(this.configurationValues.strUrlApis+'updateTechnician', technician)
          .subscribe(data => {
            resolve(data);
          }, err => {
            console.log(err);
          });
        });
    }

    public getListCategoriesTech(strIdTechnician){
      return new Promise(resolve => {
        this.httpClient.get(this.configurationValues.strUrlApis+"listCategoriesTech/"+strIdTechnician)
        .subscribe(data => {
          resolve(data['jsnAnswer']);
        }, err => {
          console.log(err);
        });
      });
    }


    public getCustomerExport(){
      
      return new Promise(resolve => {
        this.httpClient.get(this.configurationValues.strUrlApis+"customerExport/"+JSON.parse(localStorage.getItem('userAdmin'))._id)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      }); 
    }

    public getProviderExport(){
      
      return new Promise(resolve => {
        this.httpClient.get(this.configurationValues.strUrlApis+"providerExport/"+JSON.parse(localStorage.getItem('userAdmin'))._id)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      }); 
    }

    public getServiceExport(){
      
      return new Promise(resolve => {
        this.httpClient.get(this.configurationValues.strUrlApis+"serviceExport/"+JSON.parse(localStorage.getItem('userAdmin'))._id)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      }); 
    }

    public getLocationExport(idCustomer:string){
      
      return new Promise(resolve => {
        this.httpClient.get(this.configurationValues.strUrlApis+"locationExport/"+JSON.parse(localStorage.getItem('userAdmin'))._id+"/"+idCustomer)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      }); 
    }

    public getTechnicianExport(idProvider:string){
      
      return new Promise(resolve => {
        this.httpClient.get(this.configurationValues.strUrlApis+"technicianExport/"+JSON.parse(localStorage.getItem('userAdmin'))._id+"/"+idProvider)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      }); 
    }


    public getTechnicianFormInfo(strId:string){
      return new Promise(resolve => {
          this.httpClient.get(this.configurationValues.strUrlApis+"technicianForm/"+strId)
          .subscribe(data => {
            resolve(data['jsnAnswer']);
          }, err => {
            console.log(err);
          });
        });    
    }

    public putUpdateServiceProvider(serviceProvider){
      //console.log(JSON.stringify(modelUserManager,null,2));
      return new Promise(resolve => {
        //console.log(JSON.stringify(modelUserManager));
          this.httpClient.put(this.configurationValues.strUrlApis+'updateServiceProvider', serviceProvider)
          .subscribe(data => {
            resolve(data);
          }, err => {
            console.log(err);
          });
        });
    }

    public getListCategories(strIdServiceProvider){
      return new Promise(resolve => {
        this.httpClient.get(this.configurationValues.strUrlApis+"listCategories/"+strIdServiceProvider)
        .subscribe(data => {
          resolve(data['jsnAnswer']);
        }, err => {
          console.log(err);
        });
      });
    }

    public getServiceProviderFormInfo(strIdProvider:string){
      return new Promise(resolve => {
          this.httpClient.get(this.configurationValues.strUrlApis+"providerForm/"+strIdProvider)
          .subscribe(data => {
            resolve(data['jsnAnswer']);
          }, err => {
            console.log(err);
          });
        });    
    }

    getLogIn(strEmail,strPassword){
        return new Promise(resolve => {
            console.log(this.configurationValues.strUrlApis+"login"+"/"+strEmail+"/"+strPassword);
            this.httpClient.get(this.configurationValues.strUrlApis+"login"+"/"+strEmail+"/"+strPassword)
            .subscribe(data => {
              resolve(data['jsnAnswer']);
            }, err => {
              console.log(err);
            });
          });
    }

    getListServiceProviders(){
      return new Promise(resolve => {
          this.httpClient.get(this.configurationValues.strUrlApis+"serviceProviders")
          .subscribe(data => {
            resolve(data['jsnAnswer']);
          }, err => {
            console.log(err);
          });
        });    
    }

    getListCustomers(){
      return new Promise(resolve => {
          this.httpClient.get(this.configurationValues.strUrlApis+"customers")
          .subscribe(data => {
            resolve(data['jsnAnswer']);
          }, err => {
            console.log(err);
          });
        });    
    }

    getListProviderCustomers(_idServiceProvider:string){
      return new Promise(resolve => {
          this.httpClient.get(this.configurationValues.strUrlApis+"providerCustomerList/"+_idServiceProvider)
          .subscribe(data => {
            resolve(data['jsnAnswer']);
          }, err => {
            console.log(err);
          });
        });    
    }
    
    getListTechnicians(_idServiceProvider:string){
      return new Promise(resolve => {
          this.httpClient.get(this.configurationValues.strUrlApis+"technicianTeam/"+_idServiceProvider)
          .subscribe(data => {
            resolve(data['jsnAnswer']);
          }, err => {
            console.log(err);
          });
        });    
    }

    getListCostumerInfo(strIdManager:string){
      console.log("_id")
      console.log(strIdManager)
      return new Promise(resolve => {
          this.httpClient.get(this.configurationValues.strUrlApis+"manager/"+strIdManager)
          .subscribe(data => {
            resolve(data['jsnAnswer']);
          }, err => {
            console.log(err);
          });
        });    
    }

    public postAddServiceProvider(jsonArr:ModelServiceProvider[]){
      var object = {
        listModelProvider: jsonArr
      };
      return new Promise(resolve => {
          console.log(JSON.stringify(object));
          this.httpClient.post(this.configurationValues.strUrlApis+'registerProvider', object)
          .subscribe(data => {
            resolve(data);
          }, err => {
            console.log(err);
          });
        });
  }

  public postAddTechnicians(jsonTechnicianArr:ModelTechnician[],strCurrentServiceProvider:string){
    var object = {
      listModelTechnician: jsonTechnicianArr,
      idProvider:strCurrentServiceProvider
    };
    return new Promise(resolve => {
      console.log(JSON.stringify(object))
        this.httpClient.post(this.configurationValues.strUrlApis+'addTechnicians', object).subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
    }
  public putUpdateCustomerInfo(modelUserManager){
    return new Promise(resolve => {
      console.log(JSON.stringify(modelUserManager));
        this.httpClient.put(this.configurationValues.strUrlApis+'generalInformation', modelUserManager)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });

  
}

public putUpdateCustomerModelLocation(modelUserManager){
  console.log(JSON.stringify(modelUserManager,null,2));
  return new Promise(resolve => {
    console.log(JSON.stringify(modelUserManager));
      this.httpClient.put(this.configurationValues.strUrlApis+'locations', modelUserManager)
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
}

getListCustmrs(){
  return new Promise(resolve => {
      this.httpClient.get(this.configurationValues.strUrlApis+"getCustomers")
      .subscribe(data => {
        resolve(data['jsnAnswer']);
      }, err => {
        console.log(err);
      });
    });    
}

public postAddCostumers(jsonArr:ModelManager[]){
  var object = {
    listModelManager: jsonArr
  };
  return new Promise(resolve => {
      console.log(JSON.stringify(object));
      this.httpClient.post(this.configurationValues.strUrlApis+'registerCostumer', object)
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
}

public putAddCostumerLocation(jsonArr:ModelLocation[],userId:string){
  var object = {
    userId: userId,
    listModelLocation: jsonArr
  };
  return new Promise(resolve => {
      console.log(JSON.stringify(object));
      this.httpClient.put(this.configurationValues.strUrlApis+'updateLocationCustomer', object)
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
}

getListServiceRequest(){
  return new Promise(resolve => {
      this.httpClient.get(this.configurationValues.strUrlApis+"getServiceRequest")
      .subscribe(data => {
        resolve(data['jsnAnswer']);
      }, err => {
        console.log(err);
      });
    });    
}

public postAddAppointment(jsonArr:ModelServiceRequest[]){
  var object = {
    listModelServiceRequest: jsonArr
  };
  return new Promise(resolve => {
      //console.log(JSON.stringify(object));
      this.httpClient.post(this.configurationValues.strUrlApis+'registerAppointment', object)
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
}

}*/