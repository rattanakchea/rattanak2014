import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Http } from '@angular/http';

@Injectable()
export class StoreService implements Resolve<any> {

  projects: any;
  currentProject: any;

  constructor(private http: Http) { }

  resolve() {
    return this.http.get('assets/data/myProjects.json')
      .map(res => {
        console.log('in storeService resolve: ')
        this.projects = res.json();
        return this.projects();
      })
      .catch(error => {
        return Observable.of(null);
      });
  }

}
