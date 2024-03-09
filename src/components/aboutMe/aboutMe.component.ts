import { Component, OnInit } from '@angular/core';
import { Certificate } from 'src/models/certificate';

@Component({
  selector: 'app-aboutMe',
  templateUrl: './aboutMe.component.html',
  styleUrls: ['./aboutMe.component.scss']
})
export class AboutMeComponent implements OnInit {
  certificate: Certificate = {
    titleCertification: 'Titulo ingeniero en sistemas',
    linkCertification: '',
    date: '2019-En proceso',
    icon: 'heroAcademicCap'
  };
  
  constructor() { }

  ngOnInit() {
  }

}
