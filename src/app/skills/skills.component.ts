import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {
  skills = {
    frontEnd: ['HTML5', 'CSS3', 'JavaScript ES6', 'jQuery'],
    backEnd: ['Java', 'Python', 'PHP', 'C#', 'Node.js'],
    framework: ['Angular', 'React', 'ASP.net', 'Wordpress', 'Laravel', 'Ruby On Rails', 'ExpressJS'],
    database: ['SQL', 'NoSQL'],
    test: ['Jasmine', 'Mocha', 'JUnit']
  }

  constructor() {
  }

  ngOnInit() {
    
  }

}
