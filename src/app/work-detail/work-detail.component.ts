import { Component, Input } from '@angular/core';
import { StoreService} from '../services/store.service'
import { ProjectItemComponent } from '../project-item/project-item.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.sass']
})
export class WorkDetailComponent {
  currentProject: any;
  private sub: any;

  constructor(private storeService: StoreService, private aRoute: ActivatedRoute) {
    console.log('constructor of work-detail component');
    //console.log('storeServices: ', this.storeService.projects);
  }

  // look up project by Id
  // @return the project or undefined
  findCurrentProjectById(projectId) {
    return this.storeService.projects.find( project => {
      return project.id = projectId;
    });
  }

  ngOnInit() {
    if (this.storeService.currentProject) {
      this.currentProject = this.storeService.currentProject;
      return;
    }
    this.sub = this.aRoute.params.subscribe(params => {
      console.log('project id:', params['id']);
      this.currentProject = this.findCurrentProjectById(params['id']);
    })
  }

  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

}
