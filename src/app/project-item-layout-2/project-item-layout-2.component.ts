import { Component, OnInit, Input } from '@angular/core';
import { StoreService} from '../services/store.service';

@Component({
  selector: 'project-item-layout-2',
  templateUrl: './project-item-layout-2.component.html',
  styleUrls: ['./project-item-layout-2.component.sass']
})
export class ProjectItemLayout2Component implements OnInit {
  @Input() item: any;
  
  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }

}
