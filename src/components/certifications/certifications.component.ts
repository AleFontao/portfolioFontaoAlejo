import { Component, OnInit } from '@angular/core';
import { Certificate, Certificates } from 'src/models/certificate';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  certifications: Certificate[] = Certificates;
  constructor() { }

  ngOnInit() {
  }

}
