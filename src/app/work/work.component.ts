import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.sass']
})
export class WorkComponent implements OnInit {

  projects = [];

  constructor(http: Http) {
    http.get('assets/data/myProjects.json')
      .map(res => res.json())
      .subscribe(projects => {
        console.log(projects);
        this.projects = projects
      });
  }

  ngOnInit() {
  }

}
