import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../data/dataMock'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photo:string = '';
  @Input()
  title:string = '';
  @Input()
  description:string = '';

  private id:string|null = '0';
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get('id'))
    this.setValuesContent(this.id)
  }

  setValuesContent(id:string|null){
    const result = data.filter(info => info.id == id)[0];

    this.photo = result.photo;
    this.title = result.title;
    this.description = result.description;
  }
}
