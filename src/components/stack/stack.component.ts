import { Component, OnInit } from '@angular/core';
import { Technology, technologies } from 'src/models/technology';
@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {
  technologies: Technology[] = technologies;
  constructor() { }

  ngOnInit() {
  }

}
