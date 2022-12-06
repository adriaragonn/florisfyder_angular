import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  works: any;

  constructor(
    private _worksService: WorksService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._worksService.getWorks().subscribe(
      (res: any) => {
        this.works = res.data
      }
    )
  }

}
