import { Component, Input } from '@angular/core';
import { StoreService} from '../services/store.service'
import { ProjectItemComponent } from '../project-item/project-item.component';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.sass']
})
export class WorkDetailComponent {
  currentProject: any;

  constructor(private storeService: StoreService) {
    console.log('constructor');
    this.currentProject = this.storeService.currentProject;
  }

  ngOnInit() {
    console.log('init');
  }


}
