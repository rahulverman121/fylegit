import { Component, OnInit, OnChanges,Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-userrepo',
  templateUrl: './userrepo.component.html',
  styleUrls: ['./userrepo.component.css']
})
export class UserrepoComponent implements OnChanges {
  @Input() name:string='defunkt';
  start:number=0;
  end:number=this.start+5;
  repo:any;
  setpage(inst:number) {
    this.start=(inst-1)*6;
    this.end=this.start+5;

  }
  constructor(private http : HttpClient){

  } 
  // name='defunkt'
  ngOnChanges(): void {
    this.start=0;
    this.end=this.start+5;
    this.http.get('https://api.github.com/users/'+this.name+'/repos')
    .subscribe(Response => {
      console.log(Response)
      this.repo=Response;
    });
  }
}
