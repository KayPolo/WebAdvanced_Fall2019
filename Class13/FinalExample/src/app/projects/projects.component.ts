import { Component, OnInit } from '@angular/core';
import {projects} from '../projects';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  data = projects;
  constructor() { }

  ngOnInit() {
  }

}
