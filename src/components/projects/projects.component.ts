import { Component, OnInit } from '@angular/core';
import { Project, Projects } from 'src/models/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:Project[] = Projects;
  constructor() { }

  ngOnInit() {
    
    this.projects.forEach((project, index )=> {
      project.position = index%2 == 0 ? "0" : "1";
    })
  }

}
