import { Component, Input } from '@angular/core';
import { StoreService} from '../services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.sass']
})
export class ProjectItemComponent {
  @Input() item: any;
  
  constructor(private storeService: StoreService, private router: Router) { }

  gotoDetail(project) {
    this.storeService.currentProject = project;
    this.router.navigate([`/work/${project.id}`])
  }

}
