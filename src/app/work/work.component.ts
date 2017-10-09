import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { ProjectItemComponent } from '../project-item/project-item.component';
import 'rxjs/add/operator/map'
import { StoreService} from '../services/store.service'

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.sass']
})
export class WorkComponent {

  projects = [];

  constructor(http: Http, private storeService: StoreService, private router: Router) {
    http.get('assets/data/myProjects.json')
      .map(res => res.json())
      .subscribe(projects => {
        console.log(projects);
        this.projects = projects
      });
  }

  gotoDetail(project) {
    this.storeService.currentProject = project;
    this.router.navigate([`/work/${project.id}`])
  }

}
