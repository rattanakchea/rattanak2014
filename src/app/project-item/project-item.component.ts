import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.sass']
})
export class ProjectItemComponent {
  @Input() item: any;
  
  constructor() { }

}
