import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  options: any;
  subOptions: any = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _workService: WorksService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    let id:any = this._activatedRoute.snapshot.paramMap.get('id')
    this._workService.getOptions(id).subscribe(
      (res:any) => {
        console.log(res.data)
        if(res.data[0].options.length == 0){
          this._router.navigateByUrl(`nuevo-pedido/(works:products/${id})`)
        }else {
          this.options = res.data[0].options
        }
      }
    )
  }

  hasOptions(id:any, work: string){
    let work_div: any = document.querySelector(`.rama-${work}`)
    let options = []
    let template:any = '';
    this._workService.getSubOptions(id).subscribe(
      (res: any) => {
        if(res.data.length > 0){
          res.data.forEach((el:any) => {
            console.log(el)
            template += `<a class="btn btn-secondary btn-rama" style="font-size: 0.8rem;width: 75%;margin-left: 25%;margin-top: 0.4rem;">${el.work}</a>` 
          });
          work_div.innerHTML = template
          work_div.classList = `rama-${work} rama`
        }
      }
    )

  }

}
