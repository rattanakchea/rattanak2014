import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project-item-layout-2',
  templateUrl: './project-item-layout-2.component.html',
  styleUrls: ['./project-item-layout-2.component.sass']
})
export class ProjectItemLayout2Component {
  @Input() item: any;

  constructor() { }
}
